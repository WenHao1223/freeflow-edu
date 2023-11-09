import React, { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { base, components, utilities} from 'tailwindcss';

// firebase
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from 'firebase/auth';
import { doc, getFirestore, updateDoc } from "firebase/firestore";

import { Tooltip, initTE } from "tw-elements";

// shared components
import LoginNavbar from './sharedComponents/LoginNavbar';
import HomeNavbar from './sharedComponents/HomeNavbar';
import SOLtoUSD from './pages/SOLtoUSD';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import FirstTimeUser from './pages/FirstTimeUser';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Course from './pages/Course';
import Upload from './pages/Upload';
import Subscription from './pages/Subscription';
import SignOut from './pages/SignOut';
import Error from './pages/Error';


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

// StyleSheet
import './App.css'

class App extends Component {

    constructor(props) {
        initTE({ Tooltip });

        super(props);

        this.state = {
            user: null || JSON.parse(localStorage.getItem("user")),
            walletAddress: null,
            role: null,
            walletResponse: null
        };
    }
    
    componentDidMount() {
        if(this.state.user !== null && JSON.parse(localStorage.getItem("user"))){
            this.setState({
                user: JSON.parse(localStorage.getItem("user"))
            });
        }

        this.checkIfWalletIsConnected();
    }

    auth = getAuth();

    updateUserState = (data) => {
        this.setState({
            user: data
        });
    }

    updateRoleState = (data) => {
        this.setState({
            role: data
        });
    }

    checkIfWalletIsConnected = async () => {
        if (window?.solana?.isPhantom) {
            console.log('Phantom wallet found!');
            const response = await window.solana.connect({ onlyIfTrusted: true });
            console.log('Connected with Public Key:', response.publicKey.toString());

            this.setState({
                walletAddress: response.publicKey.toString(),
                walletResponse: response
            });
            const docUser = doc(db, "Users", this.state.user.uid);
            await updateDoc(docUser, {
                walletAddress: response.publicKey.toString()
            }).then(() => {
                // alert("Wallet address " + this.state.walletAddress + " is connected with your FreeFlow Edu account now.");
            });

            return true;
        } else {
            console.log('Solana object not found! Get a Phantom Wallet 👻');
            return false;
        }
    };

    connectWallet = async () => {
        const { solana } = window;
        
        if (solana) {
            const response = await solana.connect().catch(() => {
                alert("Fail to connect Wallet. Have you login to your Phantom wallet?");
            });
            console.log('Connected with Public Key:', response.publicKey.toString());
            this.setState({
                walletAddress: response.publicKey.toString(),
                walletResponse: response
            });
            const docUser = doc(db, "Users", this.state.user.uid);
            await updateDoc(docUser, {
                walletAddress: response.publicKey.toString()
            }).then(() => {
                // alert("Wallet address " + this.state.walletAddress + " is connected with your FreeFlow Edu account now.");
            });
        } else {
            alert("You do not have a Phantom wallet. Please install it from your web browser extension store.");
        }
    };

    disconnectWallet = async () => {
        if (solana) {
            const response = await solana.disconnect();
            console.log('Disconnected with Public Key:', this.state.walletAddress);
            alert("Wallet address" + this.state.walletAddress + " is disconnected from your FreeFlow Edu account now.");
            this.setState({walletAddress: null});
            const docUser = doc(db, "Users", this.state.user.uid);
        }
    }

    renderNotConnectedContainer = () => (
        <button type="button" data-te-ripple-init data-te-ripple-color="light" className="cta-button connect-wallet-button flex items-center rounded bg-[#878595] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#6B6A77] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#52515B] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#52515B] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"  onClick={ !this.state.walletAddress ? this.connectWallet : this.disconnectWallet }  data-te-toggle="tooltip" title={this.state.walletAddress != null && this.state.walletAddress.slice(0,4)+"..."+this.state.walletAddress.slice(-5,-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="mr-1 h-8 w-8">
                <rect xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="transparent"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.6416 82.1477C50.8744 89.4525 42.8862 98.6966 32.2568 98.6966C27.232 98.6966 22.4004 96.628 22.4004 87.6424C22.4004 64.7584 53.6445 29.3335 82.6339 29.3335C99.1257 29.3335 105.697 40.7755 105.697 53.7689C105.697 70.4471 94.8739 89.5171 84.1156 89.5171C80.7013 89.5171 79.0264 87.6424 79.0264 84.6688C79.0264 83.8931 79.1552 83.0527 79.4129 82.1477C75.7409 88.4182 68.6546 94.2361 62.0192 94.2361C57.1877 94.2361 54.7397 91.1979 54.7397 86.9314C54.7397 85.3799 55.0618 83.7638 55.6416 82.1477ZM80.6133 53.3182C80.6133 57.1044 78.3795 58.9975 75.8806 58.9975C73.3438 58.9975 71.1479 57.1044 71.1479 53.3182C71.1479 49.532 73.3438 47.6389 75.8806 47.6389C78.3795 47.6389 80.6133 49.532 80.6133 53.3182ZM94.8102 53.3184C94.8102 57.1046 92.5763 58.9977 90.0775 58.9977C87.5407 58.9977 85.3447 57.1046 85.3447 53.3184C85.3447 49.5323 87.5407 47.6392 90.0775 47.6392C92.5763 47.6392 94.8102 49.5323 94.8102 53.3184Z" fill="#FFFDF8"/>
            </svg>
            { !this.state.walletAddress ? "Connect to Wallet" : "Disconnect from Wallet"}
        </button>
    );

    render() {
        if (!(this.state.user || JSON.parse(localStorage.getItem("user")))){
            // alert("Session has expired. Login again.");
            console.log("Session has expired. Login again.")

            return (
                <BrowserRouter>
                    <Routes>
                        {/* <Route exact path="/freeflow-edu/" element={<LoginNavbar/>}> */}
                        <Route exact path="/" element={<LoginNavbar/>}>
                            <Route index active element={<Login state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="sign-out" element={<SignOut/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <Routes>
                        {/* <Route exact path="/freeflow-edu/" element={<HomeNavbar state={this.state} renderNotConnectedContainer={this.renderNotConnectedContainer} updateRoleState={this.updateRoleState}/>}> */}
                        <Route exact path="/" element={<HomeNavbar state={this.state} renderNotConnectedContainer={this.renderNotConnectedContainer} updateRoleState={this.updateRoleState}/>}>
                            <Route index active element={<Home state={this.state}/>}/>
                            <Route path="profile/:id" element={<Profile state={this.state}/>}/>
                            <Route path="sign-out" element={<SignOut state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState}/>}/>
                            {/* SwCgPZXZQN32PHS7wfOI, 34UHqGokBnRqsJGsNILh */}
                            <Route path="course/:url" element={<Course state={this.state}/>}/>
                            <Route path="upload" element={<Upload state={this.state}/>}/>
                            <Route path="subscription" element={<Subscription/>}/>
                            <Route path="first-time-user" element={<FirstTimeUser state={this.state}/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }
    }
    
}

export default App;