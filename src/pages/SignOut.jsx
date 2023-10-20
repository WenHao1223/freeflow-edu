import React, { Component, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';

class SignOut extends Component {
    constructor(props) {
        super(props);

        this.updateUserState = props.updateUserState;

        this.state = props.state;
        this.setState = this.setState.bind(this);
    }

    auth = getAuth();

    logout = () => {
        signOut(this.auth)
            .then((result) => {
                this.setState({
                    user: null
                });
        
                this.props.updateUserState(null);
            })
            .catch((error) => {
                console.log(error);
            });

        localStorage.clear();

    }

    render() {
        console.log(this.state);
        if(this.state){
            return (
                <>
                    <h3>Are you sure you want to sign out? </h3>
                    <p>This action is undone and you will be required to login again.</p>
                    <button onClick={this.logout}>Sign out</button>
                    <br/>
                    <Link to="/freeflow-edu/">Back Home</Link>
                </>
            );
        }
        return <Navigate to="/freeflow-edu/"></Navigate>
    }
}

export default SignOut;