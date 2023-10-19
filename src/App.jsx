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

// StyleSheet
import './App.css'

function App() {
    const [user, setUser] = useState(null);
    // const [user, setUser] = useState('ds');

    console.log(user);
    
    if (!user){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginNavbar/>}>
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
                    <Route path="/" element={<HomeNavbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;