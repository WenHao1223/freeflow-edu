import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const LoginNavbar = ({setUser}) => {
    return (
        <>
            <nav className='navbar'>
                <NavLink to='/freeflow-edu/' className={ ({isActive}) => isActive ? 'link active' : 'link'}>
                    Login</NavLink>
                <NavLink to='/freeflow-edu/register' className={ ({isActive}) => isActive ? 'link active' : 'link'}>
                    Register</NavLink>
            </nav>

            <Outlet/>
        </>
    );
};

export default LoginNavbar;