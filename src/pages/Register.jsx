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

//     signUpFB = (props) => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     provider.addScope("email");

//     if(document.getElementById("c_privacy").checked){
//         const auth = getAuth();
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const credential = FacebookAuthProvider.credentialFromResult(result);
//                 const accessToken = credential.accessToken;
//                 const user = result.user;
//                 const email = result.user.email;
            
//                 console.log(credential);
//                 console.log(token);
//                 console.log(user);
//                 console.log(email);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log({errorCode, errorMessage});
//         });
//     } else {+
//         alert("Please agree to the Privacy Policy, and Terms and Conditions of FreeFlow Edu app.");
//     }
// };
    
//     otp = () => {
//         if($("#t_email").val() != ""){
//             if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#t_email").val())){
//                 $("#t_email").attr("disabled", true);
//                 $("#b_request").attr("disabled", true);
//                 let sec = 10;
//                 const otpCount = setInterval(() => {
//                     $("#b_request").text(--sec + " secs...");
//                     if (sec == 0) {
//                         $("#b_request").attr("disabled", false);
//                     $("#b_request").text("Resend OTP");
//                         clearInterval(otpCount);
//                     }
//                 }, 1000)
//             } else {
//                 alert("Email not valid.");
//             }
//         } else {
//             alert("Please fill in email.")
//         }
//     }
    

    render() {
        if(this.state.user){
            console.log("loged in");
            return <Navigate to="/freeflow-edu/"></Navigate>
        }

        console.log(this.state.user);
        
        return (
            <>
                <h1>Register</h1>
                <div>
                    <img src="" alt="Register Thumbnail" />
                </div>
    
                <div>
                    <label> Email: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="" id="t_email" />
                    </label>
                    <br/>
                    <label> Username: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="" id="t_username" />
                    </label>
                    <br/>
                    <label> Password: 
                        <input onKeyUp={this.handleKeyPress} type="password" name="" id="t_password" />
                    </label>
                    <br/>
                    <label> Confirm Password: 
                        <input onKeyUp={this.handleKeyPress} type="password" name="" id="t_confirm_password" />
                    </label>
                    <br/>
                    {/* <label> OTP: 
                        <input type="number" name="" id="t_otp" />
                        <button onClick={this.otp} id="b_request">Request</button>
                    </label> */}
                    <br/>
                    <label>
                        <input onKeyUp={this.handleKeyPress} type="checkbox" name="" id="c_privacy" />
                        I agree to the <a href="privacy_policy.html" target="_blank">Privacy Policy</a>, and <a href="terms_and_conditions.html" target="_blank">Terms and Conditions</a> of FreeFlow Edu app.
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" name="" id="c_rmb_me" />
                        Remember me
                    </label>
                    <br/>
                    <button onClick={this.bRegister}>Register</button>
                </div>
    
                Or sign up with
                <div>
                    <button onClick={this.signUpGoogle}>G+</button>
                    {/* <button onClick={this.signUpFB}>FB</button> */}
                </div>
    
                <Link to="../">Already login?</Link>
            </>
        );
    }
}

export default Register;