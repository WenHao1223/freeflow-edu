import React, { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { base, components, utilities} from 'tailwindcss';

// firebase
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from 'firebase/auth';
import { doc, getFirestore, updateDoc } from "firebase/firestore";

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
import Wishlist from './pages/Wishlist';
import Upload from './pages/Upload';
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
        super(props);

        this.state = {
            user: null || JSON.parse(localStorage.getItem("user")),
            walletAddress: null
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

        console.log(this.state);
    }

    checkIfWalletIsConnected = async () => {
        if (window?.solana?.isPhantom) {
            console.log('Phantom wallet found!');
            const response = await window.solana.connect({ onlyIfTrusted: true });
            console.log('Connected with Public Key:', response.publicKey.toString());

            this.setState({walletAddress: response.publicKey.toString()});
            const docUser = doc(db, "Users", this.state.user.uid);
            await updateDoc(docUser, {
                walletAddress: response.publicKey.toString()
            }).then(() => {
                alert("Wallet address " + this.state.walletAddress + " is connected with your FreeFlow Edu account now.");
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
            this.setState({walletAddress: response.publicKey.toString()});
            const docUser = doc(db, "Users", this.state.user.uid);
            await updateDoc(docUser, {
                walletAddress: response.publicKey.toString()
            }).then(() => {
                alert("Wallet address " + this.state.walletAddress + " is connected with your FreeFlow Edu account now.");
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
            await updateDoc(docUser, {
                walletAddress: null
            });
        }
    }

    renderNotConnectedContainer = () => (
        <button className="cta-button connect-wallet-button" onClick={ !this.state.walletAddress ? this.connectWallet : this.disconnectWallet }>
            <img src="https://3632261023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVOiF6Zqit57q_hxJYp%2Ficon%2FU7kNZ4ygz4QW1rUwOuTT%2FWhite%20Ghost_docs_nu.svg?alt=media&token=447b91f6-db6d-4791-902d-35d75c19c3d1" alt="Phantom" width="64px"/>
            { !this.state.walletAddress ? "Connect to Wallet" : "Disconnect from Wallet "+this.state.walletAddress }
        </button>
    );

    // sendSOL = (recipentAddress, amount) => {

    // }

    render() {
        console.log(this.state);
        if (!(this.state.user || JSON.parse(localStorage.getItem("user")))){
            // alert("Session has expired. Login again.");
            console.log("Session has expired. Login again.")

            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu/" element={<LoginNavbar/>}>
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
                        <Route exact path="/freeflow-edu/" element={<HomeNavbar state={this.state} renderNotConnectedContainer={this.renderNotConnectedContainer}/>}>
                            <Route index active element={<Home state={this.state}/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="sign-out" element={<SignOut state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState}/>}/>
                            {/* SwCgPZXZQN32PHS7wfOI */}
                            <Route path="course" element={<Course url={"hIUj0FUmoygUHmC3Om46"} state={this.state}/>}/>
                            <Route path="wishlist" element={<Wishlist state={this.state}/>}/>
                            <Route path="upload" element={<Upload state={this.state}/>}/>
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