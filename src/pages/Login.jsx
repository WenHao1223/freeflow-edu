import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInAnonymously, updateProfile } from "firebase/auth";

class Login extends Component {
    constructor(props) {
        super(props);

        this.updateUserState = props.updateUserState;
        
        this.state = props.state;
        this.setState = this.setState.bind(this);
    }

    handleKeyPress = (e) => {
        if(e.key == "Enter") {
            console.log("enter");
            this.bLogin();
        }
    }

    bLogin = () => {
        if($("#t_email").val() != "" && $("#t_password").val() != ""){
            const auth = getAuth();
            var email = $("#t_email").val();
            var password = $("#t_password").val();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const credential = userCredential;

                    this.setState({
                        user: user
                    });
    
                    this.props.updateUserState(user);
                    
                    if(document.getElementById("c_rmb_me").checked){
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("displayName", user.displayName);
                        localStorage.setItem("email", user.email);
                    }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log({errorCode, errorMessage});

                    if(errorCode == "auth/invalid-login-credentials"){
                        alert("Wrong Email or Password.")
                    } else if (errorCode == "auth/invalid-email"){
                        alert("Invalid Email.")
                    } else {
                        alert(errorCode);
                    }
                });
        } else {
            alert("Please fill in all the information required.");
        }
    }

    signUpGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    
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
    }

    guest = () => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then((result) => {
                console.log(result.user);
                const user = result.user;
                const credential = result;

                updateProfile(auth.currentUser, {
                    displayName: "Guest"
                }).then((result) => {
                    console.log(result);
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
                    localStorage.setItem("displayName", "Guest");
                    localStorage.setItem("email", user.email);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({errorCode, errorMessage});
            });
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div>
                    <img src="" alt="Login Thumbnail" />
                </div>
    
                <div>
                    <label> Email: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="" id="t_email" />
                    </label>
                    <br/>
                    <label> Password: 
                        <input onKeyUp={this.handleKeyPress} type="password" name="" id="t_password" />
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" name="" id="c_rmb_me" />
                        Remember me
                    </label>
                    <br/>
                    <button onClick={this.bLogin}>Login</button>
                </div>
    
                Or login with
                <div>
                    <button onClick={this.signUpGoogle}>G+</button>
                    {/* <button onClick={this.signUpFB}>FB</button> */}
                </div>
    
                <Link to="register">Haven't registered?</Link>
                <br/>
                <Link onClick={this.guest}>Login as Guest</Link>
            </>
        );
    }
}

export default Login;