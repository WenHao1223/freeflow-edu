import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({setUser}) => {
    return (
        <>
            <h1>Register</h1>
            <div>
                <img src="" alt="Register Thumbnail" />
            </div>

            <div>
                <label htmlFor=""> Email: 
                    <input type="text" name="" id="" />
                </label>
                <br/>
                <label htmlFor=""> Username: 
                    <input type="text" name="" id="" />
                </label>
                <br/>
                <label htmlFor=""> Password: 
                    <input type="password" name="" id="" />
                </label>
                <br/>
                <label htmlFor=""> Confirm Password: 
                    <input type="password" name="" id="" />
                </label>
                <br/>
                <label htmlFor=""> Request Authentication Code: 
                    <input type="number" name="" id="" />
                </label>
            </div>

            <div>
                <button>G+</button>
                <button>FB</button>
            </div>
        </>
    );
};

export default Register;