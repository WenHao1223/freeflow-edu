import React, { Component, useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { upperCase } from "./utils";
import { Collapse, Dropdown, Tooltip, initTE } from "tw-elements";

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
    useEffect(() => {
        initTE({ Collapse, Dropdown, Tooltip });
    }, []);

    const docUser = doc(db, "Users", props.state.user.uid);
    const getDocUser = async () => {
        try {
            const doc = await getDoc(docUser);
            if(doc.data()["role"] === "teacher") {
                $("#t_role").html(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: rgba(225, 225, 225, 1);transform: ;msFilter:;"><path d="M576 48H224c-8.8 0-16 7.2-16 16v41.3c-14.8-6-31-9.3-48-9.3V64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H544 520 392 368 336.8c-8.3-18-19.8-34.2-33.7-48H368V328c0-30.9 25.1-56 56-56h64c30.9 0 56 25.1 56 56v40h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM496 368V328c0-4.4-3.6-8-8-8H424c-4.4 0-8 3.6-8 8v40h80zM208 224a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM50.7 464H269.3c-9.5-36.8-42.9-64-82.6-64H133.3c-39.8 0-73.2 27.2-82.6 64zM0 485.3C0 411.7 59.7 352 133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3z"></path></svg>`);
            } else if (doc.data()["role"] === "student") {
                $("#t_role").html(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: rgba(225, 225, 225, 1);transform: ;msFilter:;"><path d="M320 80c2.5 0 5 .4 7.4 1.3l218 78.7-218 78.7c-2.4 .9-4.9 1.3-7.4 1.3s-5-.4-7.4-1.3L184.9 192.6l140.8-52.8c8.3-3.1 12.5-12.3 9.4-20.6s-12.3-12.5-20.6-9.4L154.9 169.6c-5.2 2-10.3 4.2-15.3 6.6L94.7 160l218-78.7c2.4-.9 4.9-1.3 7.4-1.3zM15.8 182.6l77.4 27.9c-27.2 28.7-43.7 66.7-45.1 107.7c-.1 .6-.1 1.2-.1 1.8c0 28.4-10.8 57.8-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14-7.5-28.3-13.4-41.5c1.9-37 19.2-70.9 46.7-94.2l169.5 61.2c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32s-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6zm480.8 80l-46.5 16.8 12.7 120.5c-4.8 3.5-12.8 8-24.6 12.6C410 423.6 368 432 320 432s-90-8.4-118.3-19.4c-11.8-4.6-19.8-9.2-24.6-12.6l12.7-120.5-46.5-16.8L128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6zM467.4 396a.7 .7 0 1 0 -1.2-.7 .7 .7 0 1 0 1.2 .7zm-294.8 0a.7 .7 0 1 0 1.2-.6 .7 .7 0 1 0 -1.2 .6z"></path></svg>`);
            } else if (doc.data()["role"] === "special needy / refugee / disabilities") {
                $("#t_role").html(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: rgba(225, 225, 225, 1);transform: ;msFilter:;"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9l0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 6-.4 12-1.1 17.9c-14.6-7.3-30.4-12.7-47-15.8c0-.7 0-1.4 0-2.1v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2l-.1 .1-.1 .1-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7l8.7-8c5.3 16.1 12.8 31.2 22.2 44.9l-.6 .6c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm47.9 63c-4.3-3.7-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2H452.4l30.1-54.2c2.8-5 1.7-11.1-2.6-14.9z"></path></svg>`);
            } else {
                $("#t_role").html(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: rgba(225, 225, 225, 1);transform: ;msFilter:;"><path d="M267.6 3c-7.2-4-16-4-23.2 0L17.6 128.1C6.7 134.1 0 145.5 0 157.9C0 176.8 15.2 192 34.1 192H477.9c18.8 0 34.1-15.2 34.1-34.1c0-12.4-6.7-23.8-17.6-29.8L267.6 3zM256 51.4L423.8 144H88.2L256 51.4zM112 224H64V384H56c-13.3 0-24 10.7-24 24s10.7 24 24 24H456c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V224H400V384H336V224H288V384H224V224H176V384H112V224zM0 488c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24z"></path></svg>`);
            }
            $("#dropdownMenuButton2").attr("data-te-original-title", props.state.user.displayName+" "+props.state.user.email+" "+upperCase(doc.data()["role"]));
            $("#dropdownMenuButton2").attr("aria-label", props.state.user.displayName+" "+props.state.user.email+" "+upperCase(doc.data()["role"]));
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
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-transparent dark:bg-transparent lg:flex-wrap lg:justify-start mb-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
                        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                {/* <NavLink to='/freeflow-edu/' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Home</NavLink> */}
                                <NavLink to='/' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Home</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                {/* <NavLink to={'/freeflow-edu/profile/'+props.state.user.uid} className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Profile</NavLink> */}
                                <NavLink to={'/profile/'+props.state.user.uid} className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Profile</NavLink>
                            </li>
                            <li style={{display: "none"}} className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref id="uploadLink">
                                {/* <NavLink to='/freeflow-edu/upload' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Upload</NavLink> */}
                                <NavLink to='/upload' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Upload</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                {/* <NavLink to='/freeflow-edu/subscription' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Subscription</NavLink> */}
                                <NavLink to='/subscription' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Subscription</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                {/* <NavLink to='/freeflow-edu/sign-out' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Sign Out</NavLink> */}
                                <NavLink to='/sign-out' className={ ({isActive}) => isActive ? 'link active text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400' : 'link text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-primary/90 dark:[&.active]:text-primary-400'}>Sign Out</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="relative flex items-center justify-center">
                        {/* <div className="button relative ms-4 me-4 rounded bg-[#84948C] px-6 pt-3 pb-3.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#6A7770] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#515B55] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" to={'/freeflow-edu/profile/'+props.state.user.uid}> */}
                        <div className="button relative ms-4 me-4 rounded bg-[#84948C] px-6 pt-3 pb-3.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#6A7770] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#515B55] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" to={'/profile/'+props.state.user.uid}>
                            {/* <Link className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none flex items-center justify-center" id="dropdownMenuButton2" role="button" data-te-toggle="tooltip" title={props.state.user.displayName+"\n"+props.state.user.email} to={'/freeflow-edu/profile/'+props.state.user.uid}> */}
                            <Link className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none flex items-center justify-center" id="dropdownMenuButton2" role="button" data-te-toggle="tooltip" title={props.state.user.displayName+"\n"+props.state.user.email} to={'/profile/'+props.state.user.uid}>
                                <img src={props.state.user.photoURL} className="rounded-full" style={{height: "25px", width: "25px"}} alt="Profile Img" loading="lazy" />
                                <p className="ms-2" id="t_role"></p>
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