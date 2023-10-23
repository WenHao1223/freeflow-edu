import React, { Component, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { upperCase } from "./utils";

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

const HomeNavbar = (props) => {
    console.log(props.state.user);
    const docUser = doc(db, "Users", props.state.user.uid);

    const getDocUser = async () => {
        try {
            const doc = await getDoc(docUser);
            $("#t_role").text(upperCase(doc.data()["role"]));
        } catch (e) {
            console.log("Error reading document of collection Users: ", e)
        }
    }

    getDocUser();

    return (
        <>
            <nav className='navbar'>
                <NavLink to='/' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Home</NavLink>
                <NavLink to='/profile' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Profile</NavLink>
                <NavLink to='/sign-out' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Sign Out</NavLink>

                <Link to="/profile">
                    <img src={props.state.user.photoURL} alt="Profile Img"/>
                    <p>{props.state.user.displayName}</p>
                    <p>{props.state.user.email}</p>
                    <p id="t_role"></p>
                </Link>
            </nav>

            <Outlet/>
        </>
    );
}

export default HomeNavbar;