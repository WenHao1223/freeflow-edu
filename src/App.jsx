import React, { Component, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// shared components
import LoginNavbar from './sharedComponents/loginNavbar';
import HomeNavbar from './sharedComponents/HomeNavbar';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
import Error from './pages/Error';

// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const firebaseAnalytics = getAnalytics(firebaseApp);

// StyleSheet
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            credential: null
        };
    }

    updateUserState = (data) => {
        this.setState({
            user: data
        });

        console.log(this.state);
    }

    updateCredentialState = (data) => {
        this.setState({
            credential: data
        });

        console.log(this.state);
    }

    render() {
        
        console.log(this.state.user);

        if (!(this.state.user || localStorage.getItem("user"))){
            alert("Session has ended. Login again.");
            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu" element={<LoginNavbar/>}>
                            <Route index active element={<Login state={this.state} updateUserState={this.updateUserState} updateCredentialState={this.updateCredentialState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState} updateCredentialState={this.updateCredentialState}/>}/>
                            <Route path="sign-out" element={<SignOut/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        } else {
            console.log(this.state.user);
            console.log(this.state.credential);

            if (this.state.user.metadata.creationTime === this.state.user.metadata.lastSignInTime) {
                console.log("first-time user");
            }

            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu" element={<HomeNavbar/>}>
                            <Route index active element={<Home/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="sign-out" element={<SignOut state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="login" element={<Login state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }

    }
    
}

export default App;