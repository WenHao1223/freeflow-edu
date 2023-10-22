import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = props.state;
    }

    render() {
        console.log(this.state.user);
        if(this.state.user){
            if(this.state.user.metadata.creationTime === this.state.user.metadata.lastSignInTime){
                console.log("first-time user");
                return <Navigate to="/freeflow-edu/first-time-user"></Navigate>
            }
        }
    
        return (
            <Navigate to="/freeflow-edu/first-time-user"></Navigate>
            // <h1>Home</h1>
        );
    }
};

export default Home;