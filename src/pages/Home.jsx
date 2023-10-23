import React, { Component, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

const Home = (props) => {
    const [user, setUser] = useState(props.state.user);
    const [credential, setCredential] = useState(props.state.credential);
    const navigate = useNavigate();

    if(user){
        const docUser = doc(db, "Users", user.uid);

        const checkExists = () => {
            getDoc(docUser).then((result) => {
                console.log(result)
                if(!result.exists()){
                    if(user.metadata.creationTime === user.metadata.lastSignInTime){
                        console.log("first-time user");
                        navigate("/first-time-user");
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
    }

    return(
        <>
            <h1 className="text-gray-300">Home</h1>
        </>
    );
};

export default Home;