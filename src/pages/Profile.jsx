import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { createRoot } from 'react-dom/client';

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, query, where, getDocs, collection } from "firebase/firestore";
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

const Profile = (props) => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [enrolled, setEnrolled] = useState(null);
    const [wishlist, setWishlist] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [profileRole, setProfileRole] = useState(null);

    const docUsers = doc(db, "Users", id);
    const fetchDocUsers = async () => {
        const getDocUsers = await getDoc(docUsers);
        if (getDocUsers.exists()) {
            $("#t_img_profile").attr("src", getDocUsers.data().photoURL);
            $("#t_name_profile").text(getDocUsers.data().displayName);
            $("#t_role_profile").text(upperCase(getDocUsers.data().role));
            if ( id === props.state.user.uid ){
                if (getDocUsers.data().wishlist) {
                    if(!wishlist){
                        setWishlist(getDocUsers.data().wishlist);
                    }
                }
                if (getDocUsers.data().enrolled) {
                    if(!enrolled){
                        setEnrolled(getDocUsers.data().enrolled);
                    }
                }
            }
            if(!profileRole) {
                setProfileRole(getDocUsers.data().role);
            }
        } else {
            console.log("No such document for users with uid", props.state.user.uid);
        }
    }
    
    console.log("profile id", id);

    fetchDocUsers();
    3

    
    if (props.state.user.uid === id){
        const GenerateCardEnrolled = () => {
            return isArrayEmpty(enrolled) ? [] : enrolled.map((item, pos) => {
                const viewCourse = (docID) => {
                    return navigate("../course/" + docID);
                }
                return(
                    <main className="my-8">
                <div key={pos} className="w-full h-96 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-3/4" style={{backgroundImage: "url()"}} alt="Course Thumbnail" id={item+"_enrolled_card_thumbnail"}>
                <div className="bg-gray-900 bg-opacity-70 flex items-center h-full dark:bg-opacity-50">
                    <div className="px-10 max-w-xl">
                    <p className="mb-4 text-sm text-yellow-500 dark:text-neutral-500 dark:text-yellow-500"><span id={item+"_enrolled_eduLvl"}></span> <span id={item+"_enrolled_sub"}></span></p>
                    <h2 className="text-2xl text-white font-semibold" id={item+"_enrolled_title"}></h2>
                    <p className="mt-2 mb-3 text-gray-300 text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]" id={item+"_enrolled_des"}></p>
                        <div className="gap-4" id={item+"_enrolled_tag"}></div>
                        <button type="button" className="flex items-center mt-4 text-white bg-transparent text-sm uppercase font-medium rounded hover:underline focus:outline-none" onClick={() => viewCourse(item)}>
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
            const root = createRoot(document.getElementById("div_enrolled"));
    
            root.render(
                <GenerateCardEnrolled/>
            );
    
            for (let i in enrolled) {
                const docCourse = doc(db, "Course", enrolled[i]);
                getDoc(docCourse).then((result) => {
                    $("#"+result.id+"_enrolled_title").text(result.data().title);
                    $("#"+result.id+"_enrolled_des").text(result.data().des);
                    $("#"+result.id+"_enrolled_eduLvl").text(upperCase(result.data().eduLvl));
                    $("#"+result.id+"_enrolled_sub").text(upperCase(result.data().sub));
    
                    const generateImg = (docID) => {
                        getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                            $(`#${enrolled[i]}_enrolled_card_thumbnail`).css("backgroundImage", `url(${url})`);
                        });
                    };
                    generateImg(enrolled[i]);
    
                    for ( let j in result.data().tag) {
                        $("#"+result.id+"_enrolled_tag").html($("#"+result.id+"_enrolled_tag").html() + `<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${result.data().tag[j]}</span>`);
                    }
                }).catch((error) => {
                    console.error("No such document Course for id", wishlist[i], error);
                });
            }
        }, [enrolled]);
    
        const GenerateCard = () => {
            return isArrayEmpty(wishlist) ? [] : wishlist.map((item, pos) => {
                const viewCourse = (docID) => {
                    return navigate("../course/" + docID);
                }
                return(
                    <main className="my-8">
                    <div key={pos} className="w-full h-96 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-3/4" style={{backgroundImage: "url()"}} alt="Course Thumbnail" id={item+"_card_thumbnail"}>
                    <div className="bg-gray-900 bg-opacity-70 flex items-center h-full dark:bg-opacity-50">
                        <div className="px-10 max-w-xl">
                        <p className="mb-4 text-sm text-yellow-500 dark:text-neutral-500 dark:text-yellow-500"><span id={item+"_eduLvl"}></span> <span id={item+"_sub"}></span></p>
                        <h2 className="text-2xl text-white font-semibold" id={item+"_title"}></h2>
                        <p className="mt-2 mb-3 text-gray-300 text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]" id={item+"_des"}></p>
                            <div className="gap-4" id={item+"_tag"}></div>
                            <button type="button" className="flex items-center mt-4 text-white bg-transparent text-sm uppercase font-medium rounded hover:underline focus:outline-none" onClick={() => viewCourse(item)}>
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
            const root = createRoot(document.getElementById("div_wishlist"));
    
            root.render(
                <GenerateCard/>
            );
    
            for ( let i in wishlist) {
                const docCourse = doc(db, "Course", wishlist[i]);
                getDoc(docCourse).then((result) => {
                    $("#"+result.id+"_title").text(result.data().title);
                    $("#"+result.id+"_des").text(result.data().des);
                    $("#"+result.id+"_eduLvl").text(upperCase(result.data().eduLvl));
                    $("#"+result.id+"_sub").text(upperCase(result.data().sub));
    
                    const generateImg = (docID) => {
                        getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                            $(`#${wishlist[i]}_card_thumbnail`).css("backgroundImage", `url(${url})`);
                        });
                    };
                    generateImg(wishlist[i]);
    
                    for ( let j in result.data().tag) {
                        $("#"+result.id+"_tag").html($("#"+result.id+"_tag").html() + `<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${result.data().tag[j]}</span>`);
                    }
                }).catch((error) => {
                    console.error("No such document Course for id", wishlist[i], error);
                });
            }
        }, [wishlist]);
    }

    const GenerateCardLesson = () => {
        return isArrayEmpty(lesson) ? [] : lesson.map((item, pos) => {
            const viewCourse = (docID) => {
                return navigate("../course/" + docID);
            }
            return(
                <main className="my-8">
                <div key={pos} className="w-full h-96 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-3/4" style={{backgroundImage: "url()"}} alt="Course Thumbnail" id={item+"_card_thumbnail"}>
                <div className="bg-gray-900 bg-opacity-70 flex items-center h-full dark:bg-opacity-50">
                    <div className="px-10 max-w-xl">
                    <p className="mb-4 text-sm text-yellow-500 dark:text-neutral-500 dark:text-yellow-500"><span id={item+"_lesson_eduLvl"}></span> <span id={item+"_lesson_sub"}></span></p>
                    <h2 className="text-2xl text-white font-semibold" id={item+"_lesson_title"}></h2>
                    <p className="mt-2 mb-3 text-gray-300 text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]" id={item+"_lesson_des"}></p>
                        <div className="gap-4" id={item+"_lesson_tag"}></div>
                        <button type="button" className="flex items-center mt-4 text-white bg-transparent text-sm uppercase font-medium rounded hover:underline focus:outline-none" onClick={() => viewCourse(item)}>
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
        const root = createRoot(document.getElementById("div_teacher"));

        root.render(
            <>
                {profileRole === "teacher" && <h3 className="text-xl font-bold mt-6 mb-4">Lessons</h3>}
                <GenerateCardLesson/>
            </>
        );

        for (let i in lesson) {
            const docCourse = doc(db, "Course", lesson[i]);
            getDoc(docCourse).then((result) => {
                $("#"+result.id+"_lesson_title").text(result.data().title);
                $("#"+result.id+"_lesson_des").text(result.data().des);
                $("#"+result.id+"_lesson_eduLvl").text(upperCase(result.data().eduLvl));
                $("#"+result.id+"_lesson_sub").text(upperCase(result.data().sub));

                const generateImg = (docID) => {
                    getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                        $(`#${lesson[i]}_card_thumbnail`).css("backgroundImage", `url(${url})`);
                    });
                };
                generateImg(lesson[i]);

                for ( let j in result.data().tag) {
                    $("#"+result.id+"_lesson_tag").html($("#"+result.id+"_lesson_tag").html() + `<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${result.data().tag[j]}</span>`);
                }
            }).catch((error) => {
                console.error("No such document Course for id", lesson[i], error);
            });
        }
    }, [lesson]);

    useEffect(() => {
        if(profileRole === "teacher") {
            const q = query(collection(db, "Course"), where("userUID", "==", id));
            const fetchQDocs = async () => {
                const querySnapshot = await getDocs(q);
                setLesson(querySnapshot.docs.map(doc => doc.id))
            }

            fetchQDocs();
        }
    }, [profileRole]);

    return (
        <>
           <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="Profile Image" id="t_img_profile">
                        </img>
                         <h1 className="text-xl font-bold">John Doe</h1>
                         <p id="t_name_profile" className="text-gray-600"></p>
                         <p id="t_role_profile" className="text-gray-600"></p>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Personal information</span>
                        <ul>
                            <li className="mb-2">Role:</li>
                            <li className="mb-2">Educational Level:</li>
                            <li className="mb-2">Country:</li>
                            <li className="mb-2">Enrolled course:</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    {props.state.user.uid === id && <>
                        <h3 className="text-xl font-bold mb-4">Enrolled Course</h3>
                        <div id="div_enrolled"></div>
                        <h3 className="text-xl font-bold mt-6 mb-4">Wishlist</h3>
                        <div id="div_wishlist"></div>
                    </>}
                    <div id="div_teacher"></div>

                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default Profile;