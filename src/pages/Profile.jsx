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
            console.log(getDocUsers.data())
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
    fetchDocUsers();


    
    if (props.state.user.uid === id){
        const GenerateCardEnrolled = () => {
            return isArrayEmpty(enrolled) ? [] : enrolled.map((item, pos) => {
                const viewCourse = (docID) => {
                    console.log(docID);
                    return navigate("../course/" + docID);
                }
                return(
                    <div key={pos} className="mb-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                        <img className="h-96 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xs:w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg" src="" alt="Course Thumbnail" id={item+"_enrolled_card_thumbnail"}/>
                        <div className="flex flex-col justify-start p-6"><h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50" id={item+"_enrolled_title"}></h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" id={item+"_enrolled_des"}></p>
                            <p className="mb-4 text-sm text-neutral-400 dark:text-neutral-300"><span id={item+"_enrolled_eduLvl"}></span> <span id={item+"_enrolled_sub"}></span></p>
                            <div className="gap-4" id={item+"_enrolled_tag"}></div>
                            <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-2 mb-2" onClick={() => viewCourse(item)}>View Course</button>
                        </div>
                    </div>
                );
            });
        };

        useEffect(() => {
            const root = createRoot(document.getElementById("div_enrolled"));
    
            root.render(
                <GenerateCardEnrolled/>
            );
    
            for (let i in enrolled) {
                console.log(enrolled);
                const docCourse = doc(db, "Course", enrolled[i]);
                getDoc(docCourse).then((result) => {
                    $("#"+result.id+"_enrolled_title").text(result.data().title);
                    $("#"+result.id+"_enrolled_des").text(result.data().des);
                    $("#"+result.id+"_enrolled_eduLvl").text(upperCase(result.data().eduLvl));
                    $("#"+result.id+"_enrolled_sub").text(upperCase(result.data().sub));
    
                    const generateImg = (docID) => {
                        getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                            $(`#${enrolled[i]}_enrolled_card_thumbnail`).attr("src", url);
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
            return isArrayEmpty(enrolled) ? [] : wishlist.map((item, pos) => {
                const viewCourse = (docID) => {
                    console.log(docID);
                    return navigate("../course/" + docID);
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
                            $(`#${wishlist[i]}_card_thumbnail`).attr("src", url);
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
                console.log(docID);
                return navigate("../course/" + docID);
            }
            return(
                <div key={pos} className="mb-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img className="h-96 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xs:w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg" src="" alt="Course Thumbnail" id={item+"_lesson_card_thumbnail"}/>
                    <div className="flex flex-col justify-start p-6"><h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50" id={item+"_lesson_title"}></h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" id={item+"_lesson_des"}></p>
                        <p className="mb-4 text-sm text-neutral-400 dark:text-neutral-300"><span id={item+"_lesson_eduLvl"}></span> <span id={item+"_lesson_sub"}></span></p>
                        <div className="gap-4" id={item+"_lesson_tag"}></div>
                        <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-2 mb-2" onClick={() => viewCourse(item)}>View Course</button>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        const root = createRoot(document.getElementById("div_teacher"));

        root.render(
            <>
                <h3 className="text-3xl bold py-5">Lessons</h3>
                <GenerateCardLesson/>
            </>
        );

        for (let i in lesson) {
            console.log(lesson);
            const docCourse = doc(db, "Course", lesson[i]);
            getDoc(docCourse).then((result) => {
                $("#"+result.id+"_lesson_title").text(result.data().title);
                $("#"+result.id+"_lesson_des").text(result.data().des);
                $("#"+result.id+"_lesson_eduLvl").text(upperCase(result.data().eduLvl));
                $("#"+result.id+"_lesson_sub").text(upperCase(result.data().sub));

                const generateImg = (docID) => {
                    getDownloadURL(ref(storage, docID+"/thumbnail.jpg")).then((url) => {
                        $(`#${lesson[i]}_lesson_card_thumbnail`).attr("src", url);
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
            const q = query(collection(db, "Course"), where("userUID", "==", "TaTnr1b52dY46GbLtOF2XtdKShm1"));
            const fetchQDocs = async () => {
                const querySnapshot = await getDocs(q);
                setLesson(querySnapshot.docs.map(doc => doc.id))
            }

            fetchQDocs();
        }
    }, [profileRole]);
    
    return (
        <>
            <h1>Profile</h1>
            <h3>Name: <span id="t_name_profile"></span></h3>
            <h3 id="t_role_profile"></h3>
            {props.state.user.uid === id && <>
                <h3 className="text-3xl bold py-5">Enrolled Course</h3>
                <div id="div_enrolled"></div>
                <h3 className="text-3xl bold py-5">Wishlist</h3>
                <div id="div_wishlist"></div>
            </>}
            <div id="div_teacher"></div>
        </>
    );
};

export default Profile;