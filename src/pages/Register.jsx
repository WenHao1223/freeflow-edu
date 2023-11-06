import React, { Component, useState } from "react";
import { Link, Navigate } from "react-router-dom";

// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

class Register extends Component { 
    constructor(props) {
        super(props);

        this.updateUserState = props.updateUserState;
        
        this.state = props.state;
        this.setState = this.setState.bind(this);
    }

    handleKeyPress = (e) => {
        if(e.key == "Enter") {
            console.log("enter");
            this.bRegister();
        }
    }

    bRegister = () => {
        if($("#t_email").val() != "" && $("#t_username").val() != "" && $("#t_password").val() != "" && $("#t_confirm_password").val() != "" && $("#t_otp").val() != ""){
            if($("#t_password").val() == $("#t_confirm_password").val()){
                if(document.getElementById("c_privacy").checked){
                    const auth = getAuth();
                    var email = $("#t_email").val();
                    var password = $("#t_password").val();
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            const username = $("#t_username").val();

                            updateProfile(auth.currentUser, {
                                displayName: username
                            }).then((result) => {
                                // console.log(result);
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log({errorCode, errorMessage});
                            })

                            this.setState({
                                user: user
                            });
                            
                            this.props.updateUserState(user);

                            if(document.getElementById("c_rmb_me").checked){
                                localStorage.setItem("user", JSON.stringify(user));
                                localStorage.setItem("displayName", username);
                                localStorage.setItem("email", user.email);
                            }
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log({errorCode, errorMessage});
                            if(error.code==="auth/email-already-in-use"){
                                alert("Email is already in use.", "warning");
                            } else if(error.code==="auth/weak-password"){
                                alert("Weak password.", "warning");
                            } else {
                                alert(error.code+": "+error.messagee, 'danger');
                            }
                        });
                } else {
                    alert("Please agree to the Privacy Policy, and Terms and Conditions of FreeFlow Edu app.");
                }
            } else {
                alert("Password not match.");
            }
        } else {
            alert("Please fill in all the information required.")
        }
    }

    signUpGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    
        if(document.getElementById("c_privacy").checked){
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    const email = result.user.email;
    
                    this.setState({
                        user: user
                    });

                    this.props.updateUserState(user);

                    if(document.getElementById("c_rmb_me").checked){
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("displayName", user.displayName);
                        localStorage.setItem("email", user.email);
                    }
            
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log({errorCode, errorMessage});
            });
        } else {
            alert("Please agree to the Privacy Policy, and Terms and Conditions of FreeFlow Edu app.");
        }
    }

    render() {
        if(this.state.user){
            console.log("loged in");
            return <Navigate to="/freeflow-edu/"></Navigate>
        }

        console.log(this.state.user);
        
        return (
            <>
                <div className="min-h-screen mt-4 bg-gray-100 text-gray-900 flex justify-center">
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                            <div className="mt-12 flex flex-col items-center">
                                <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
                                <div className="w-full flex-1 mt-8">
                                    <div className="flex flex-col items-center ">
                                        <button onClick={this.signUpGoogle} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                            <div className="bg-white p-2 rounded-full">
                                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                                                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                                                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                                                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                                                </svg>
                                            </div>
                                            <span className="ml-4"> Sign up with G+
                                            </span>
                                        </button>

                                    </div>

                                    <div className="my-12 border-b text-center">
                                                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"> Or sign up with e-mail
                                                        </div>
                                                    </div>


                                    <div className="mx-auto max-w-xs">
                                        <input onKeyUp={this.handleKeyPress} className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="email" placeholder="Email" id="t_email" />
                                        <input onKeyUp={this.handleKeyPress} className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="username" placeholder="Username" id="t_username" />
                                        <input onKeyUp={this.handleKeyPress} className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" id="t_password" />
                                        <input onKeyUp={this.handleKeyPress} className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Confirm Password" id="t_confirm_password" />
                                        <label className="w-full py-4">
                                            <input onKeyUp={this.handleKeyPress} type="checkbox" name="" id="c_privacy"/> &nbsp;I agree to the<a href="privacy_policy.html" target="_blank">Privacy Policy</a>, and <a href="terms_and_conditions.html" target="_blank">Terms and Conditions</a> of FreeFlow Edu app.
                                        </label>
                                        <br>
                                        </br>
                                        <label className="w-full py-4">
                                            <input className="mb-2" type="checkbox" name="" id="c_rmb_me"/> &nbsp;Remember me
                                        </label>
                                        <button onClick={this.bRegister} className="mt-5  tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                                <span className="ml-3 ">Register
                                                </span>
                                        </button>      
                                                <Link className="mb-2 mt-2 block" to="../">Already login?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;