import React, { Component, useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL} from "firebase/storage";
import { isArrayEmpty, upperCase } from "../sharedComponents/utils";

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

const Home = (props) => {
    const [user, setUser] = useState(props.state.user);
    const [credential, setCredential] = useState(props.state.credential);

    const [recommended, setRecommended] = useState(null);
    const navigate = useNavigate();

    if(user){
        const docUser = doc(db, "Users", user.uid);

        const checkExists = () => {
            getDoc(docUser).then((result) => {
                if(!result.exists()){
                    if(user.metadata.creationTime === user.metadata.lastSignInTime){
                        console.log("first-time user");
                        navigate("/freeflow-edu/first-time-user");
                    } else {
                        console.log("registered");
                    }
                } else {
                    console.log("registered");
                }
            }).catch((error) => {
                console.log("Error getting document of collection Users: ", error);
            });
        }
        checkExists();

        const GenerateCard = () => {
            return isArrayEmpty(recommended) ? [] : recommended.map((item, pos) => {
                const viewCourse = (docID) => {
                    console.log(docID);
                    return navigate("course/" + docID);
                }
                return(
                    <div key={pos} className="mb-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                        <img className="h-96 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xs:w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg" src="" alt="Course Thumbnail" id={item+"_card_thumbnail"}/>
                        <div className="flex flex-col justify-start p-6"><h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50" id={item+"_title"}></h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" id={item+"_des"}></p>
                            <p className="mb-4 text-sm text-neutral-400 dark:text-neutral-300"><span id={item+"_eduLvl"}></span> <span id={item+"_sub"}></span></p>
                            <div className="gap-4" id={item+"_tag"}></div>
                            <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-2 mb-2" onClick={() => viewCourse(item)}>View Course</button>
                        </div>
                    </div>
                );
            });
        };
    
        useEffect(() => {
            const root = createRoot(document.getElementById("div_recommended"));
    
            root.render(
                <GenerateCard/>
            );
    
            for ( let i in recommended) {
                const docCourse = doc(db, "Course", recommended[i]);
                getDoc(docCourse).then((result) => {
                    $("#"+result.id+"_title").text(result.data().title);
                    $("#"+result.id+"_des").text(result.data().des);
                    $("#"+result.id+"_eduLvl").text(upperCase(result.data().eduLvl));
                    $("#"+result.id+"_sub").text(upperCase(result.data().sub));
    
                    const generateImg = (docID) => {
                        getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                            $(`#${recommended[i]}_card_thumbnail`).attr("src", url);
                        });
                    };
                    generateImg(recommended[i]);
    
                    for ( let j in result.data().tag) {
                        $("#"+result.id+"_tag").html($("#"+result.id+"_tag").html() + `<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${result.data().tag[j]}</span>`);
                    }
                }).catch((error) => {
                    console.error("No such document Course for id", recommended[i], error);
                });
            }
        }, [recommended]);

        const fetchDocCourse = async () => {
            const querySnapshot = await getDocs(collection(db, "Course"));
            if(!recommended) {
                setRecommended(querySnapshot.docs.map(doc => doc.id));
            }
        }
        fetchDocCourse();
    }

    return(
        <>
            <h1 className="text-gray-300">Home</h1>
            <h3 className="text-3xl bold py-5">Recommended Course</h3>
            <div id="div_recommended"></div>
        </>
    );
};

export default Home;