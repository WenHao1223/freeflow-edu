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
                    <main className="my-8">
                        <div key={pos} className="w-full h-96 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}} alt="Course Thumbnail" id={item+"_card_thumbnail"}>
                            <div className="bg-gray-900 bg-opacity-70 flex items-center h-full dark:bg-opacity-50">
                                <div className="px-10 max-w-xl">
                                        <p className="mb-4 text-sm text-yellow-500 dark:text-neutral-500 dark:text-yellow-500"><span id={item+"_eduLvl"}></span> <span id={item+"_sub"}></span></p>
                                    <h2 className="text-2xl text-white font-semibold" id={item+"_title"}></h2>
                                        <p className="mt-2 mb-3 text-gray-300 text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]" id={item+"_des"}></p>
                                        <div className="gap-4" id={item+"_tag"}></div>
                                        <button className="flex items-center mt-4 text-white bg-transparent text-sm uppercase font-medium rounded hover:underline focus:outline-none" onClick={() => viewCourse(item)}>
                                            <span>View Course</span>
                                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </button>

                                </div>

                            </div>

                        </div>
                    </main>
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
                            $(`#${recommended[i]}_card_thumbnail`).css("backgroundImage", `url(${url})`);
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
            <h1>Home</h1>
            <h3 className="text-3xl bold py-5">Recommended Course</h3>
            <div id="div_recommended"></div>
        </>
    );
};

export default Home;