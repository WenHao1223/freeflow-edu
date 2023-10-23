import React, { Component, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { upperCase } from "./utils";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// // solana
// import { WalletConnectProvide } from "../components/WalletConnectProvider";
// import { Wallet } from "../components/Wallet"
// import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
// // import { useWalletTokenBalance } from '@lndgalante/solutils';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

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
    console.log(props.state.user);
    const docUser = doc(db, "Users", props.state.user.uid);

    // const { publicKey } = useWallet();
    // const { connection } = useConnection();

    // const wallet = useAnchorWallet();
    // const [txHash, setTxHash] = useState(null);


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

    // function handleWalletBalanceRequest() {
    //     if (publicKey) {
    //         getWalletTokenBalance('SOL');
    //     }
    // }
    console.log(props.state.user);
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

            </nav>
            {/* <WalletMultiButton/>
            <button onClick={handleWalletBalanceRequest}>Request Wallet Balance</button> */}

            <Outlet/>
        </>
    );
}

export default HomeNavbar;