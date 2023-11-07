import { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Ripple, initTE } from "tw-elements";

// firebase
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove, collection, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { isArrayEmpty, upperCase } from "../sharedComponents/utils";
import { useParams, Link, useNavigate } from "react-router-dom";

// solana
import SOLtoUSD from "./SOLtoUSD";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
// import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';

import { Buffer } from "buffer";
window.Buffer = Buffer;

import bs58 from "bs58";
const connection = new Connection("https://api.devnet.solana.com");

const firebaseConfig = {
    apiKey: "AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",
    authDomain: "freeflow-edu.firebaseapp.com",
    projectId: "freeflow-edu",
    storageBucket: "freeflow-edu.appspot.com",
    messagingSenderId: "452838619706",
    appId: "1:452838619706:web:b09c97c4f716734f699303",
    measurementId: "G-VMWMHD4L2L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const Course = (props) => {
    const { url } = useParams();
    const navigate = useNavigate();

    const [enrolled, setEnrolled] = useState(false);
    const [tutorID, setTutorID] = useState(null);
    const [solPrice, setSolPrice] = useState(null);
    const [recipentAdd, setRecipentAdd] = useState(null);
    console.log(props.state.walletResponse);

    useEffect(() => {
        initTE({ Ripple });
    }, []);

    const [rate, setRate] = useState(props.rate);

    var wallet;
    useEffect(() => {
        wallet = props.state.walletAddress;
    }, [props.state.walletAddress]);
    
    useEffect(() => {
        $("#card_price").text(rate);
    }, [$("#card_sol").text()]);

    const docRef = doc(db, "Course", url);
    const fetchDocRef = async () => {
        const getDocRef = await getDoc(docRef);
        if (getDocRef.exists()) {
            $("#card_title").text(upperCase(getDocRef.data().title));
            $("#card_des").text(getDocRef.data().des);
            $("#card_sub").text(upperCase(getDocRef.data().sub));
            $("#card_level").text(upperCase(getDocRef.data().eduLvl));
            $("#card_lang").text(upperCase(getDocRef.data().lang));
            $("#card_sol").text((getDocRef.data().sol * 1.05).toFixed(2));
            setSolPrice(getDocRef.data().sol);
            $("#card_uploadTime").text(new Date(getDocRef.data().uploadTime.seconds*1000).toLocaleString());
            if (getDocRef.data().mode === "both") {
                $("#card_mode").text("Video and notes");
            } else if (getDocRef.data().mode === "video") {
                $("#card_mode").text("Video");
            } else {
                $("#card_mode").text("Notes");
            }
            const generateTag = () => {
                let tagHTML = "";
                for (let i in getDocRef.data().tag) {
                    tagHTML += `<span class="me-1 mb-1 inline-block whitespace-nowrap rounded-[0.27rem] text-secondary-50 bg-info-100 px-[1em] pb-[0.5em] pt-[0.6em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600 text-xs">${getDocRef.data().tag[i]}</span>`;
                }
                $("#card_tag").html(tagHTML);
            }
            generateTag();
            $("#card_tag").html(generateTag);

            if(!tutorID) {
                setTutorID(getDocRef.data().userUID);
            }
            
            const docTutor = doc(db, "Users", getDocRef.data().userUID);
            const fetchDocTutor = async () => {
                const getDocTutor = await getDoc(docTutor);
                if (getDocTutor.exists()) {
                    const root = createRoot(document.getElementById("card_tutor"));
                    $("#card_tutor").text(getDocTutor.data().displayName);
                    setRecipentAdd(getDocTutor.data().walletAddress);
                } else {
                    console.log("No such document for Users with UID of", getDocTutor.data().userUID);
                }
            };
            fetchDocTutor();

            const imgRef = ref(storage, url+"/thumbnail.jpg");
            getDownloadURL(imgRef).then((url) => {
                $("#card_img").attr("src", url);
            });

            const docUser = doc(db, "Users", props.state.user.uid);
            const fetchDocUser = async () => {
                const getDocUser = await getDoc(docUser);
                if (getDocUser.exists()) {
                    if (getDocUser.data().wishlist){
                        if (getDocUser.data().wishlist.indexOf(url) >= 0){
                            $("#b_wishlist").text("- REMOVE FROM WISHLIST");
                        } else {
                            $("#b_wishlist").text("+ ADD TO WISHLIST");
                        }
                    }
                    if (getDocUser.data().enrolled){
                        if (getDocUser.data().enrolled.indexOf(url) >= 0){
                            $("#b_enroll").text("ENROLLED");
                            $("#b_enroll").attr("disabled", true);
                            setEnrolled(true);
                        } else {
                            $("#b_enroll").text("ENROLL NOW");
                        }
                    }
                } else {
                    console.log("No such document for User with UID", props.state.user.uid);
                }
            }
            fetchDocUser();

        } else {
            console.log("No such document for Course with link", url);
        }
    };
    fetchDocRef();

    const fetchDocUsers = () => {
        const q = query(collection(db, "Users"), where("enrolled", "array-contains", url));
        const fetchQDocs = async () => {
            const querySnapshot = await getDocs(q);
            $("#card_enroll").text(querySnapshot.docs.length);
        }
        fetchQDocs();
    }
    fetchDocUsers();

    const addToWishlist = () => {
        const docUser = doc(db, "Users", props.state.user.uid);
        const fetchDocUser = async () => {
            if ($("#b_wishlist").text() === "+ ADD TO WISHLIST") {
                await updateDoc(docUser, {
                    wishlist: arrayUnion(url)
                });
                $("#b_wishlist").text("- REMOVE FROM WISHLIST");
                alert("Added to wishlist!");
            } else {
                await updateDoc(docUser, {
                    wishlist: arrayRemove(url)
                });
                $("#b_wishlist").text("+ ADD TO WISHLIST");
                alert("Removed from wishlist!");
            }
        };
        fetchDocUser();
    };

    const getProvider = () => {
        if ('phantom' in window) {
            const provider = window.phantom?.solana;
        
            if (provider?.isPhantom) {
                return provider;
            }
        }
        window.open('https://phantom.app/', '_blank');
    };

    const sendSOL = async (senderAddress, recipentAddress, amount) => {
        console.log("sendSol");
        if(!recipentAddress && !amount) {
            console.log("Wallet address of recipent or amount to transfer not found!");
            return;
        }
        
            const senderWallet = Keypair.fromSecretKey(
                bs58.decode("2EhyfeJPRDYCdQFvZwc5ZUiMRASqhPt17N8a55WoZnnZ8B6d6G5ih87g4q8Li6wreZGcUEXWAoG9nxRTMbpenEXm")
            );

            // const senderPublicKey = new PublicKey("NraaJwoeNHCu5Wu1iRm1cfvx7NLKgySnTv76dU5T7oH");
            const receiverPublicKey = new PublicKey(recipentAddress);

            const getBalance = async () => {
                let senderBalance = await connection.getBalance(senderWallet.publicKey);
                let receiverBalance = await connection.getBalance(receiverPublicKey);
                console.log(
                    `Sender Balance: ${senderBalance / LAMPORTS_PER_SOL} SOL`
                );
                console.log(
                    `Receiver Balance: ${receiverBalance / LAMPORTS_PER_SOL} SOL`
                );
            };
            getBalance();

            const generateToken = async () => {
                let txHash = await connection.requestAirdrop(senderWallet.publicKey, 1e9);
                console.log(`txHash: ${txHash}`);
            }
            // generateToken();

            const startTranscation = async () => {
                let senderBalance = await connection.getBalance(senderWallet.publicKey);

                if ((senderBalance / LAMPORTS_PER_SOL) > (solPrice * 1.05).toFixed(2)) {
                    let transaction = new Transaction().add(
                        SystemProgram.transfer({
                            fromPubkey: senderWallet.publicKey,
                            toPubkey: receiverPublicKey,
                            lamports: amount * LAMPORTS_PER_SOL
                        })
                    );
                    
                    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
                    transaction.feePayer = senderWallet.publicKey;
                    transaction.partialSign(senderWallet);
    
                    let transactionHash = await connection.sendTransaction(transaction, [senderWallet]);
                    console.log("Transaction hash to teacher:", transactionHash, amount);

                    let transaction2 = new Transaction().add(
                        SystemProgram.transfer({
                            fromPubkey: senderWallet.publicKey,
                            toPubkey: "5VHWzF3jFnc9WK7MijhcHT7QDRZ1Zt1W6Pvf6wrTsdQh",
                            lamports: parseInt((amount * 0.05).toFixed(2) * LAMPORTS_PER_SOL)
                        })
                    );
                    
                    transaction2.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
                    transaction2.feePayer = senderWallet.publicKey;
                    transaction2.partialSign(senderWallet);
    
                    let transactionHash2 = await connection.sendTransaction(transaction2, [senderWallet]);
                    console.log("Commission hash:", transactionHash2, (amount * 0.05).toFixed(2));
                    
                    const docUser = doc(db, "Users", props.state.user.uid);
                    const fetchDocUser = async () => {
                        await updateDoc(docUser, {
                            enrolled: arrayUnion(url)
                        });
                        $("#b_enroll").text("ENROLLED");
                        $("#b_enroll").attr("disabled", true);
                        setEnrolled(true);
                    }
                    fetchDocUser();
                    alert("Commission of 5% paid successfully.");
                } else {
                    alert("Transaction failed. Not enough SOL tokens to pay.");
                    return;
                }
            }
            startTranscation();

    }

    const toTutorProfile = () => {
        navigate("../profile/"+tutorID);
    }

    const enroll = () => {
        if (props.state.role === "special needy / refugee / disabilities") {
            const docUser = doc(db, "Users", props.state.user.uid);
            const fetchDocUser = async () => {
                await updateDoc(docUser, {
                    enrolled: arrayUnion(url)
                });
                $("#b_enroll").text("ENROLLED");
                $("#b_enroll").attr("disabled", true);
                setEnrolled(true);
            }
            fetchDocUser();
            alert("Enrolled with special discount #FreeHelpEdu");
        } else {
            if (confirm(`Are you sure you want to proceeed by paying a transcation fee of ${(solPrice * 1.05).toFixed(2)} SOL? \n\n 5% of commission fee is applied for web maintainence.`)) {
                sendSOL(props.state.walletAddress, recipentAdd, solPrice);
            }
        }
    }

    useEffect(() => {
        if(enrolled) {
            const videoRef = ref(storage, url+"/video.mp4");
            getDownloadURL(videoRef).then((videoURL) => {
                $("#media_area").html($("#media_area").html()+`<h1 class="text-4xl font-bold m-4">Video</h1><video width="100%" height="100%" controls><source src="${videoURL}" type="video/mp4">Your browser does not support the video tag.</video>`);
            });

            const notesRef = ref(storage, url+"/notes.pdf");
            getDownloadURL(notesRef).then((notesURL) => {
                $("#media_area").html($("#media_area").html()+`<h1 class="text-4xl font-bold m-4">Notes</h1><object data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" width="100%" height="800"></object>`);
            });
        }
    }, [enrolled]);

    return(
        <>
            <h1 className="text-4xl font-bold mb-4">Course</h1>

            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-8xl md:flex-row">
                <img className="w-1/2 rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg" src="" alt="Course thumbnail" id="card_img"/>
                <div className="flex flex-col justify-start max-w-3xl p-6">
                    <h5 className="mb-2 text-3xl font-semibold text-neutral-800 dark:text-neutral-50" id="card_title"></h5>
                    <p className="mb-4 text-sm text-warning-600 dark:text-warning-400">* <span id="card_mode"></span> included.</p>
                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200" id="card_des"></p>
                    <div className="mb-4 gap-4" id="card_tag"></div>
                    <div className="grid grid-cols-2 gap-2 max-w-xs mb-4">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Subject</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_sub"></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Tutor</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 underline text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 cursor-pointer" onClick={toTutorProfile} id="card_tutor"></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Level</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_level"></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Language</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_lang"></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Price</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><span id="card_sol">0.00</span> SOL / <span id="card_price">{<SOLtoUSD sol={$("#card_sol").text()}/>}</span> USD"</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Enrollment</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_enroll">0</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300 mb-4">Uploaded on <span id="card_uploadTime"></span></p>
                    <div className="w-full grid grid-cols-2 gap-2">
                    <button type="button" onClick={enroll} className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:opacity-70" data-te-ripple-init data-te-ripple-color="light" id="b_enroll">ENROLL NOW</button>
                    <button onClick={addToWishlist} type="button" className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light" id="b_wishlist">+ ADD TO WISHLIST</button>
                    </div>
                </div>
            </div>
            <br />
            <div id="media_area"></div>
        </>
    );
}

export default Course;