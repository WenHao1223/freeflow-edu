import React, { Component, useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { upperCase } from "./utils";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// // solana
// import { useTransferTokens } from '@lndgalante/solutils';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

// import Button from "../components/Button";

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

    // solana hooks
    // const { connection } = useConnection();
    // const { publicKey, sendTransaction } = useWallet();

    // solutils hooks
    // const { getTransferTokensReceipt, result, status, error } = useTransferTokens(publicKey, connection, sendTransaction);

    const docUser = doc(db, "Users", props.state.user.uid);
    const getDocUser = async () => {
        try {
            const doc = await getDoc(docUser);
            $("#t_role").text(upperCase(doc.data()["role"]));
            if(doc.data()["role"] === "teacher") {
                $("#uploadLink").attr("style", "display: inherit");
            }
        } catch (e) {
            console.log("Error reading document of collection Users: ", e);
        }
    }

    getDocUser();

    console.log(props.state.walletAddress);
    return (
        <>
            <nav className='navbar'>
                <NavLink to='/freeflow-edu/' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Home</NavLink>
                <NavLink to='/freeflow-edu/profile' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Profile</NavLink>
                <NavLink style={{display: "none"}} to='/freeflow-edu/upload' className={ ({isActive}) => isActive ? 'link active' : 'link'} id="uploadLink">Upload</NavLink>
                <NavLink to='/freeflow-edu/sign-out' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Sign Out</NavLink>

                <Link to="/freeflow-edu/profile">
                    <img src={props.state.user.photoURL} alt="Profile Img"/>
                    <p>{props.state.user.displayName}</p>
                    <p>{props.state.user.email}</p>
                    <p id="t_role"></p>
                </Link>

                {props.renderNotConnectedContainer()}

            </nav>

            <Outlet/>
        </>
    );
}

export default HomeNavbar;