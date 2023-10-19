import { useState } from 'react'
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

// StyleSheet
import './App.css'

function App() {
    const [user, setUser] = useState(null);
    // const [user, setUser] = useState('ds');

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseAnalytics = getAnalytics(firebaseApp);

    console.log(user);
    
    if (!user){
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LoginNavbar/>}>
                        <Route index element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeNavbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;