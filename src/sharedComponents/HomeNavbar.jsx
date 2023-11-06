import React, { Component, useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { upperCase } from "./utils";
import { Collapse, Dropdown, Tooltip, initTE } from "tw-elements";

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
    useEffect(() => {
        initTE({ Collapse, Dropdown, Tooltip });
    }, []);

    const docUser = doc(db, "Users", props.state.user.uid);
    const getDocUser = async () => {
        try {
            const doc = await getDoc(docUser);
            $("#t_role").text(upperCase(doc.data()["role"]));
            if(doc.data()["role"] === "teacher") {
                $("#uploadLink").attr("style", "display: inherit");
            }
            if(!props.state.role || props.state.role !== doc.data()["role"]){
                props.updateRoleState(doc.data()["role"]);
            }
        } catch (e) {
            console.log("Error reading document of collection Users: ", e);
        }
    }

    getDocUser();

    console.log(props.state.walletAddress);
    return (
        <>
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] dark:bg-transparent lg:flex-wrap lg:justify-start">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
                        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <NavLink to='/freeflow-edu/' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Home</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <NavLink to={'/freeflow-edu/profile/'+props.state.user.uid} className={ ({isActive}) => isActive ?
                                'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Profile</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <NavLink style={{display: "none"}} to='/freeflow-edu/upload' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'} id="uploadLink">Upload</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <NavLink to='/freeflow-edu/subscription' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Subscription</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <NavLink to='/freeflow-edu/sign-out' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Sign Out</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="relative flex items-center">
                        <div className="relative me-4">
                            <Link to={'/freeflow-edu/profile/'+props.state.user.uid} className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false" data-te-toggle="tooltip" title={props.state.user.displayName+"\n"+props.state.user.email}>
                            <img src={props.state.user.photoURL} className="rounded-full" style={{height: "25px", width: "25px"}} alt="Profile Img" loading="lazy" />
                            <p className="ms-2 text-gray-300 text-sm" id="t_role"></p>
                            </Link>
                        </div>
                        <div className="relative">
                            {props.renderNotConnectedContainer()}
                        </div>
                    </div>
                </div>
            </nav>


            <Outlet/>
        </>
    );
}

export default HomeNavbar;