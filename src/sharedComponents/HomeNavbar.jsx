import React, { Component, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeNavbar = () => {
    return (
        <>
            <nav className='navbar'>
                <NavLink to='/freeflow-edu/' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Home</NavLink>
                <NavLink to='/freeflow-edu/profile' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Profile</NavLink>
                <NavLink to='/freeflow-edu/sign-out' className={ ({isActive}) => isActive ? 'link active' : 'link'}>Sign Out</NavLink>
            </nav>

            <Outlet/>
        </>
    );
}

export default HomeNavbar;