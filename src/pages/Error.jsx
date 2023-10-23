import { useState } from "react";
import { Link } from "react-router-dom";

const Error = ({setUser}) => {
    return (
        <>
            <h1>404: Page Not Found</h1>
            <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
            <Link to="/">Back Home</Link>
        </>
    );
};

export default Error;