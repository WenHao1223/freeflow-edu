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
                            <h1 className="text-2xl xl:text-3xl font-bold flex items-center mb-2 pb-2">
                                    <svg className="inline-block rounded-lg border-[1px] border-gray-400 me-6" height="50" width="50" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#E7E7E7", clipRule: "evenodd", fillRule: "evenodd", imageRendering: "optimizeQuality", shapeRendering: "geometricPrecision", textRendering: "geometricPrecision" }} xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1042.54 1042.54">
                                        <g><path d="M 565.5,200.5 C 566.833,201.167 566.833,201.167 565.5,200.5 Z" fill="#ebeceb" style={{ fill: "#ebeceb", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 562.5,202.5 C 563.833,203.167 563.833,203.167 562.5,202.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 514.5,340.5 C 513.5,340.5 512.5,340.5 511.5,340.5C 499.5,340.5 487.5,340.5 475.5,340.5C 475.5,295.5 475.5,250.5 475.5,205.5C 503.5,205.5 531.5,205.5 559.5,205.5C 559.833,201.5 560.167,201.5 560.5,205.5C 562.527,205.338 564.527,205.505 566.5,206C 564.535,217.246 563.868,228.746 564.5,240.5C 547.833,240.5 531.167,240.5 514.5,240.5C 514.5,249.167 514.5,257.833 514.5,266.5C 529.34,266.409 544.34,266.409 559.5,266.5C 559.5,277.833 559.5,289.167 559.5,300.5C 544.34,300.591 529.34,300.591 514.5,300.5C 514.5,313.833 514.5,327.167 514.5,340.5 Z" fill="#2f2f2f" style={{ fill: "#2f2f2f", fillRule: "evenodd", opacity: 1 }} /></g>
                                        <g><path d="M 515.5,241.5 C 516.833,242.167 516.833,242.167 515.5,241.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 562.5,241.5 C 563.833,242.167 563.833,242.167 562.5,241.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 517.5,242.5 C 518.833,243.167 518.833,243.167 517.5,242.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 560.5,242.5 C 561.833,243.167 561.833,243.167 560.5,242.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 516.5,244.5 C 517.833,245.167 517.833,245.167 516.5,244.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 561.5,244.5 C 562.833,245.167 562.833,245.167 561.5,244.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 564.5,243.5 C 565.525,243.897 565.692,244.563 565,245.5C 564.536,244.906 564.369,244.239 564.5,243.5 Z" fill="#e8e8e8" style={{ fill: "#e8e8e8", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 471.5,336.5 C 472.833,337.167 472.833,337.167 471.5,336.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 517.5,336.5 C 518.833,337.167 518.833,337.167 517.5,336.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 511.5,340.5 C 512.5,340.5 513.5,340.5 514.5,340.5C 514.043,342.557 513.043,342.557 511.5,340.5 Z" fill="#e4e4e4" style={{ fill: "#e4e4e4", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 518.5,340.5 C 519.525,340.897 519.692,341.563 519,342.5C 518.536,341.906 518.369,341.239 518.5,340.5 Z" fill="#e5e5e5" style={{ fill: "#e5e5e5", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 296.5,360.5 C 296.897,359.475 297.563,359.308 298.5,360C 297.906,360.464 297.239,360.631 296.5,360.5 Z" fill="#e8e8e8" style={{ fill: "#e8e8e8", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 388.5,359.5 C 389.833,360.167 389.833,360.167 388.5,359.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 644.5,359.5 C 645.833,360.167 645.833,360.167 644.5,359.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 301.5,360.5 C 302.833,361.167 302.833,361.167 301.5,360.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 640.5,360.5 C 641.833,361.167 641.833,361.167 640.5,360.5 Z" fill="#ebeceb" style={{ fill: "#ebeceb", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 742.5,360.5 C 743.833,361.167 743.833,361.167 742.5,360.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 386.5,362.5 C 387.833,363.167 387.833,363.167 386.5,362.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 298.5,364.5 C 298.5,365.5 298.5,366.5 298.5,367.5C 296.443,365.957 296.443,364.957 298.5,364.5 Z" fill="#e6e6e6" style={{ fill: "#e6e6e6", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 298.5,364.5 C 329.174,364.167 359.841,364.5 390.5,365.5C 389.521,377.116 389.188,388.782 389.5,400.5C 372.5,400.5 355.5,400.5 338.5,400.5C 338.5,409.5 338.5,418.5 338.5,427.5C 353.833,427.5 369.167,427.5 384.5,427.5C 384.5,439.167 384.5,450.833 384.5,462.5C 369.167,462.5 353.833,462.5 338.5,462.5C 338.5,476.167 338.5,489.833 338.5,503.5C 325.167,503.5 311.833,503.5 298.5,503.5C 298.5,458.167 298.5,412.833 298.5,367.5C 298.5,366.5 298.5,365.5 298.5,364.5 Z" fill="#2f2f2f" style={{ fill: "#2f2f2f", fillRule: "evenodd", opacity: 1 }} /></g>
                                        <g><path d="M 639.5,364.5 C 640.833,365.167 640.833,365.167 639.5,364.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 734.5,448.5 C 732.648,449.089 730.815,449.756 729,450.5C 713.911,449.509 698.745,449.176 683.5,449.5C 683.5,456.5 683.5,463.5 683.5,470.5C 702.833,470.5 722.167,470.5 741.5,470.5C 741.5,481.5 741.5,492.5 741.5,503.5C 709.167,503.5 676.833,503.5 644.5,503.5C 644.5,457.167 644.5,410.833 644.5,364.5C 676.167,364.5 707.833,364.5 739.5,364.5C 739.5,375.5 739.5,386.5 739.5,397.5C 720.833,397.5 702.167,397.5 683.5,397.5C 683.5,404.167 683.5,410.833 683.5,417.5C 700.167,417.5 716.833,417.5 733.5,417.5C 733.192,427.915 733.525,438.249 734.5,448.5 Z" fill="#2f2f2f" style={{ fill: "#2f2f2f", fillRule: "evenodd", opacity: 1 }} /></g>
                                        <g><path d="M 339.5,401.5 C 340.833,402.167 340.833,402.167 339.5,401.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 341.5,402.5 C 342.833,403.167 342.833,403.167 341.5,402.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 388.5,402.5 C 389.833,403.167 389.833,403.167 388.5,402.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 385.5,403.5 C 386.833,404.167 386.833,404.167 385.5,403.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 340.5,404.5 C 341.833,405.167 341.833,405.167 340.5,404.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 389.5,404.5 C 390.833,405.167 390.833,405.167 389.5,404.5 Z" fill="#ecedec" style={{ fill: "#ecedec", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 389.5,405.5 C 388.833,406.167 388.833,406.167 389.5,405.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 734.5,416.5 C 733.833,415.167 733.833,415.167 734.5,416.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 734.5,416.5 C 735.833,417.167 735.833,417.167 734.5,416.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 386.5,424.5 C 387.833,425.167 387.833,425.167 386.5,424.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 389.5,426.5 C 388.833,425.167 388.833,425.167 389.5,426.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 389.5,426.5 C 390.833,427.167 390.833,427.167 389.5,426.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 388.5,428.5 C 389.833,429.167 389.833,429.167 388.5,428.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 734.5,448.5 C 735.833,449.167 735.833,449.167 734.5,448.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 387.5,455.5 C 388.833,456.167 388.833,456.167 387.5,455.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 385.5,456.5 C 386.833,457.167 386.833,457.167 385.5,456.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 390.5,456.5 C 391.833,457.167 391.833,457.167 390.5,456.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 390.5,460.5 C 391.833,461.167 391.833,461.167 390.5,460.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 741.5,465.5 C 740.833,464.167 740.833,464.167 741.5,465.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 684.5,465.5 C 685.833,466.167 685.833,466.167 684.5,465.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 741.5,465.5 C 742.833,466.167 742.833,466.167 741.5,465.5 Z" fill="#ecedec" style={{ fill: "#ecedec", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 737.5,466.5 C 738.833,467.167 738.833,467.167 737.5,466.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 740.5,467.5 C 741.833,468.167 741.833,468.167 740.5,467.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 575.5,628.5 C 568.084,635.674 560.417,641.674 552.5,646.5C 527.524,657.13 502.857,657.13 478.5,646.5C 462.25,637.238 451.083,624.572 445,608.5C 444.5,607.333 443.667,606.5 442.5,606C 442.957,605.586 443.291,605.086 443.5,604.5C 442.5,602.5 441.5,600.5 440.5,598.5C 440.709,597.914 441.043,597.414 441.5,597C 440.14,592.637 439.306,588.137 439,583.5C 438.5,559.836 438.333,536.169 438.5,512.5C 489.833,512.5 541.167,512.5 592.5,512.5C 592.937,539.533 592.437,566.533 591,593.5C 587.735,606.639 582.569,618.306 575.5,628.5 Z M 546.5,606.5 C 537.981,614.791 527.648,618.791 515.5,618.5C 503.308,618.778 492.974,614.778 484.5,606.5C 476.388,598.619 471.888,589.285 471,578.5C 470.5,568.172 470.334,557.839 470.5,547.5C 500.5,547.5 530.5,547.5 560.5,547.5C 560.898,560.219 560.398,572.886 559,585.5C 558.801,587.402 557.967,588.902 556.5,590C 557.299,591.749 556.632,593.082 554.5,594C 554.081,599.285 551.414,603.452 546.5,606.5 Z" fill="#2f2f2f" style={{ fill: "#2f2f2f", fillRule: "evenodd", opacity: 1 }} /></g>
                                        <g><path d="M 431.5,513.5 C 432.833,514.167 432.833,514.167 431.5,513.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 598.5,513.5 C 599.833,514.167 599.833,514.167 598.5,513.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 431.5,517.5 C 432.833,518.167 432.833,518.167 431.5,517.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 436.5,517.5 C 437.833,518.167 437.833,518.167 436.5,517.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 593.5,517.5 C 594.833,518.167 594.833,518.167 593.5,517.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 598.5,517.5 C 599.833,518.167 599.833,518.167 598.5,517.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 434.5,518.5 C 435.833,519.167 435.833,519.167 434.5,518.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 595.5,518.5 C 596.833,519.167 596.833,519.167 595.5,518.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 597.5,586.5 C 596.761,586.631 596.094,586.464 595.5,586C 596.437,585.308 597.103,585.475 597.5,586.5 Z" fill="#e4e4e4" style={{ fill: "#e4e4e4", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 597.5,586.5 C 598.833,587.167 598.833,587.167 597.5,586.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 593.5,587.5 C 594.833,588.167 594.833,588.167 593.5,587.5 Z" fill="#ebeceb" style={{ fill: "#ebeceb", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 596.5,588.5 C 597.833,589.167 597.833,589.167 596.5,588.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 594.5,589.5 C 595.833,590.167 595.833,590.167 594.5,589.5 Z" fill="#ebeceb" style={{ fill: "#ebeceb", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 590.5,603.5 C 591.833,604.167 591.833,604.167 590.5,603.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 442.5,609.5 C 441.833,608.167 441.833,608.167 442.5,609.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 442.5,609.5 C 443.239,609.369 443.906,609.536 444.5,610C 443.563,610.692 442.897,610.525 442.5,609.5 Z" fill="#e8e8e8" style={{ fill: "#e8e8e8", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 590.5,608.5 C 591.525,608.897 591.692,609.563 591,610.5C 590.536,609.906 590.369,609.239 590.5,608.5 Z" fill="#e8e8e8" style={{ fill: "#e8e8e8", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 586.5,613.5 C 587.833,614.167 587.833,614.167 586.5,613.5 Z" fill="#ebeceb" style={{ fill: "#ebeceb", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 588.5,615.5 C 588.897,614.475 589.563,614.308 590.5,615C 589.906,615.464 589.239,615.631 588.5,615.5 Z" fill="#e5e5e5" style={{ fill: "#e5e5e5", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 447.5,624.5 C 448.077,623.227 448.743,623.227 449.5,624.5C 449.03,625.463 448.363,625.463 447.5,624.5 Z" fill="#e7e7e7" style={{ fill: "#e7e7e7", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 581.5,623.5 C 584.001,623.511 584.168,624.178 582,625.5C 581.536,624.906 581.369,624.239 581.5,623.5 Z" fill="#e4e4e4" style={{ fill: "#e4e4e4", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 447.5,626.5 C 448.833,627.167 448.833,627.167 447.5,626.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 582.5,626.5 C 583.833,627.167 583.833,627.167 582.5,626.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 454.5,628.5 C 455.833,629.167 455.833,629.167 454.5,628.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 575.5,628.5 C 576.833,629.167 576.833,629.167 575.5,628.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 448.5,629.5 C 449.833,630.167 449.833,630.167 448.5,629.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 581.5,629.5 C 582.833,630.167 582.833,630.167 581.5,629.5 Z" fill="#e1e2e1" style={{ fill: "#e1e2e1", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 458.5,634.5 C 459.833,635.167 459.833,635.167 458.5,634.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 571.5,634.5 C 572.833,635.167 572.833,635.167 571.5,634.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 456.5,637.5 C 457.833,638.167 457.833,638.167 456.5,637.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 573.5,637.5 C 574.833,638.167 574.833,638.167 573.5,637.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 472.5,645.5 C 473.833,646.167 473.833,646.167 472.5,645.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 557.5,645.5 C 558.833,646.167 558.833,646.167 557.5,645.5 Z" fill="#e0e1e0" style={{ fill: "#e0e1e0", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 478.5,646.5 C 478.103,647.525 477.437,647.692 476.5,647C 477.094,646.536 477.761,646.369 478.5,646.5 Z" fill="#e4e4e4" style={{ fill: "#e4e4e4", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 552.5,646.5 C 553.239,646.369 553.906,646.536 554.5,647C 553.563,647.692 552.897,647.525 552.5,646.5 Z" fill="#e8e8e8" style={{ fill: "#e8e8e8", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 485.5,651.5 C 486.833,652.167 486.833,652.167 485.5,651.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 544.5,651.5 C 545.833,652.167 545.833,652.167 544.5,651.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 483.5,653.5 C 484.833,654.167 484.833,654.167 483.5,653.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 493.5,653.5 C 494.833,654.167 494.833,654.167 493.5,653.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 536.5,653.5 C 537.833,654.167 537.833,654.167 536.5,653.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 547.5,654.5 C 546.833,653.167 546.833,653.167 547.5,654.5 Z" fill="#e2e3e2" style={{ fill: "#e2e3e2", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 479.5,654.5 C 480.833,655.167 480.833,655.167 479.5,654.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                        <g><path d="M 483.5,654.5 C 482.833,655.167 482.833,655.167 483.5,654.5 Z" fill="#ecedec" style={{ fill: "#ecedec", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 547.5,654.5 C 548.833,655.167 548.833,655.167 547.5,654.5 Z" fill="#ecedec" style={{ fill: "#ecedec", fillRule: "evenodd", opacity: "0.01" }} /></g>
                                        <g><path d="M 550.5,654.5 C 551.833,655.167 551.833,655.167 550.5,654.5 Z" fill="#eaebea" style={{ fill: "#eaebea", fillRule: "evenodd", opacity: 0 }} /></g>
                                    </svg>
                                    <span>FreeFlow-Edu</span>
                                </h1>
                                <p className="text-center text-gray-500 mb-8">Sculpting Futures, Unleasing Knowledge: FreeFlow Edu, Where Learning Knows No Bounds!</p>
                                <h3 className="text-xl xl:text-2xl font-bold">Register</h3>
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
                                            <span className="ml-4"> Sign up with G+</span>
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
                                        <label className="w-full py-2 inline-block">
                                            <input onKeyUp={this.handleKeyPress} type="checkbox" id="c_privacy"/> &nbsp;I agree to the <a href="privacy_policy.html" target="_blank">Privacy Policy</a>, and <a href="terms_and_conditions.html" target="_blank">Terms and Conditions</a> of FreeFlow Edu app.
                                        </label>
                                        <br>
                                        </br>
                                        <label className="w-full py-2 inline-block">
                                            <input type="checkbox" name="" id="c_rmb_me"/> &nbsp;Remember me
                                        </label>
                                        <button onClick={this.bRegister} className="mt-5 mb-4 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                                <span className="ml-3 ">Register</span>
                                        </button>      
                                        <Link className="mb-2 mt-3 block" to="../">Already login?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/freeflow-edu.appspot.com/o/register.svg?alt=media&token=02f67466-55eb-4fb2-8b4d-02dc31415d03)"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;