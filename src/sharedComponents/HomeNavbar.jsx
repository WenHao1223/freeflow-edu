import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeNavbar = ({setUser}) => {
    return (
        <>
            <nav className='navbar'>
                <NavLink to='/' className={ ({isActive}) => isActive ? 'link active' : 'link'}>
                    Home</NavLink>
                <NavLink to='/profile' className={ ({isActive}) => isActive ? 'link active' : 'link'}>
                    Profile</NavLink>
            </nav>

            <Outlet/>
        </>
    );
};

export default HomeNavbar;