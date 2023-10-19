import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// shared components
import LoginNavbar from './sharedComponents/loginNavbar';
import HomeNavbar from './sharedComponents/HomeNavbar';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';

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

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "cd"
        };
    }

    updateState(props){
        console.log(props);
        this.setState({
            user: props
        });
        console.log(this.state.user);
    }

    render() {
        
        console.log(this.state.user);

        if (this.state.user){
            
            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu" element={<LoginNavbar/>}>
                            <Route index active element={<Login/>}/>
                            <Route path="register" element={<Register updateState={this.updateState} user={this.state.user}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/freeflow-edu" element={<HomeNavbar/>}>
                            <Route index active element={<Home/>}/>
                            <Route path="profile" element={<Profile/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }

    }
    
}

export default App;