import React, { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

// shared components
import LoginNavbar from './sharedComponents/loginNavbar';
import HomeNavbar from './sharedComponents/HomeNavbar';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import FirstTimeUser from './pages/FirstTimeUser';

import Home from './pages/Home';
import Profile from './pages/Profile';
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
const firebaseAnalytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

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
    
    componentDidMount() {
        if(this.state.user !== null && localStorage.getItem("user")){
            console.log(localStorage.getItem("user"));
            this.setState({
                user: localStorage.getItem("user")
            });
        }
    }

    auth = getAuth();

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
            // alert("Session has expired. Login again.");
            console.log("Session has expired. Login again.")
            // signOut(this.auth)
            // .then((result) => {
            //     this.setState({
            //         user: null,
            //         credential: null
            //     });
            // })
            // .catch((error) => {
            //     console.log(error);
            // });

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

            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu" element={<HomeNavbar/>}>
                            <Route index active element={<Home state={this.state}/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="sign-out" element={<SignOut state={this.state} updateUserState={this.updateUserState} updateCredentialState={this.updateCredentialState}/>}/>
                            <Route path="register" element={<Register state={this.state} updateUserState={this.updateUserState}/>}/>
                            <Route path="first-time-user" element={<FirstTimeUser/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }

    }
    
}

export default App;