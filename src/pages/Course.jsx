import { useState, useEffect } from "react";
import { Ripple, initTE } from "tw-elements";

// firebase
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { isArrayEmpty, upperCase } from "../sharedComponents/utils";
import { useSearchParams } from "react-router-dom";
import SOLtoUSD from "./SOLtoUSD";

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
    useEffect(() => {
        initTE({ Ripple });
    }, []);

    const [rate, setRate] = useState(props.rate);
    
    useEffect(() => {
        $("#card_price").text(rate);
    }, [$("#card_sol").text()]);

    const docRef = doc(db, "Course", props.url);
    const fetchDocRef = async () => {
        const getDocRef = await getDoc(docRef);
        if (getDocRef.exists()) {
            $("#card_title").text(upperCase(getDocRef.data().title));
            $("#card_des").text(getDocRef.data().des);
            $("#card_sub").text(upperCase(getDocRef.data().sub));
            $("#card_level").text(upperCase(getDocRef.data().eduLvl));
            $("#card_lang").text(upperCase(getDocRef.data().lang));
            $("#card_sol").text(getDocRef.data().sol);
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
                    tagHTML += `<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${getDocRef.data().tag[i]}</span>`;
                }
                $("#card_tag").html(tagHTML);
            }
            generateTag();
            $("#card_tag").html(generateTag);
            
            const docTutor = doc(db, "Users", getDocRef.data().userUID);
            const fetchDocTutor = async () => {
                const getDocTutor = await getDoc(docTutor);
                if (getDocTutor.exists()) {
                    $("#card_tutor").text(getDocTutor.data().displayName);
                } else {
                    console.log("No such document for Users with UID of", getDocTutor.data().userUID);
                }
            };
            fetchDocTutor();

            const imgRef = ref(storage, props.url+"/thumbnail.jpg");
            getDownloadURL(imgRef).then((url) => {
                $("#card_img").attr("src", url);
            });


            const docUser = doc(db, "Users", props.state.user.uid);
            const fetchDocUser = async () => {
                const getDocUser = await getDoc(docUser);
                if (getDocUser.exists()) {
                    if (getDocUser.data().wishlist.indexOf(props.url) >= 0){
                        $("#b_wishlist").text("- REMOVE FROM WISHLIST");
                    } else {
                        $("#b_wishlist").text("+ ADD TO WISHLIST");
                    }
                } else {
                    console.log("No such document for User with UID", props.state.user.uid);
                }
            }
            fetchDocUser();

        } else {
            console.log("No such document for Course with link", props.url);
        }
    };

    fetchDocRef();

    const addToWishlist = () => {
        const docUser = doc(db, "Users", props.state.user.uid);
        const fetchDocUser = async () => {
            if ($("#b_wishlist").text() === "+ ADD TO WISHLIST") {
                await updateDoc(docUser, {
                    wishlist: arrayUnion(props.url)
                });
                $("#b_wishlist").text("- REMOVE FROM WISHLIST");
                alert("Added to wishlist!");
            } else {
                await updateDoc(docUser, {
                    wishlist: arrayRemove(props.url)
                });
                $("#b_wishlist").text("+ ADD TO WISHLIST");
                alert("Removed from wishlist!");
            }
        };
        fetchDocUser();
    };


    return(
        <>
            <h1 className="mb-2">Course</h1>
            <p className="mb-6 text-base text-neutral-500 dark:text-neutral-300">ID: {props.url}</p>

            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-6xl md:flex-row">
                <img className="h-96 w-full rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg h-auto" src="" alt="Course thumbnail" id="card_img"/>
                <div className="flex flex-col justify-start max-w-3xl p-6">
                    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50" id="card_title"></h5>
                    <p className="mb-4 text-sm text-warning-600 dark:text-warning-400">* <span id="card_mode"></span> included.</p>
                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200" id="card_des"></p>
                    <div className="mb-4 gap-4" id="card_tag"></div>
                    <div className="grid grid-cols-2 gap-2 max-w-xs mb-4">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Subject</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_sub"></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Tutor</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300" id="card_tutor"></p>
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
                    <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">Enroll</button>
                    <button onClick={addToWishlist} type="button" className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light" id="b_wishlist"> Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;