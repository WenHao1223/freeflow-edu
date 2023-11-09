import React, { Component, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { countries } from 'countries-list';

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { isArrayEmpty } from '../sharedComponents/utils';

const firebaseConfig = {
    apiKey: "AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",
    authDomain: "freeflow-edu.firebaseapp.com",
    projectId: "freeflow-edu",
    storageBucket: "freeflow-edu.appspot.com",
    messagingSenderId: "452838619706",
    appId: "1:452838619706:web:b09c97c4f716734f699303",
    measurementId: "G-VMWMHD4L2L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

class FirstTimeUser extends Component {
    constructor(props) {
        super(props);

        console.log(props.state.user);
        
        this.state = {
            user: props.state.user,
            currentQuestion: 1,
            role: null,
            recommendBy: null,
            eduLvl: null,
            country: null
        };
        
        let countryNames = ["-- Please Select --"];
        for (let country in countries) {
            countryNames.push(countries[country].name);
        }
        countryNames.sort();

        this.data = [
            {
                id: 1,
                answering: "role",
                question: "I am a ...",
                options: ["student", "teacher", "special needy / refugee / disabilities", "public"]
            },
            {
                id: 2,
                answering: "recommendBy",
                question: "Who recommend me to this platform?",
                options: ["friends", "family", "school", "social media", "others"]
            },
            {
                id: 3,
                answering: "eduLvl",
                question: "I am currently in ...",
                options: ["primary school", "secondary school", "high school", "undergraduate", "postgraduate", "workplace"]
            },
            {
                id: 4,
                answering: "country",
                question: "I am from ...",
                options: countryNames
            }
        ]
    }

    handleKeyPress = (e) => {
        if(e.key == "Enter") {
            console.log("enter");
        }
    }

    updateState = (answering, value) => {
        this.setState({
            [answering] : value,
            currentQuestion: this.state.currentQuestion+1
        });
    }

    uploadData = async () => {
        try {
            const docUser = await setDoc(doc(db, "Users", this.state.user.uid), {
                role: this.state.role,
                recommendBy: this.state.recommendBy,
                eduLvl: this.state.eduLvl,
                country: this.state.country,
                displayName: this.state.user.displayName,
                email: this.state.user.email,
                photoURL: this.state.user.photoURL
            });
        } catch (e) {
            console.log("Error adding document of first-time login user: ", e);
        }
    }

    render() {
        console.log(this.state)
        if(this.state.user){
            if (this.state.user.metadata.creationTime === this.state.user.metadata.lastSignInTime) {
                console.log("first-time user");
            } else {
                // return <Navigate to="/freeflow-edu/"></Navigate>
                return <Navigate to="/"></Navigate>
            }
        } else {
            // return <Navigate to="/freeflow-edu/"></Navigate>
            return <Navigate to="/"></Navigate>
        }

        const questionCards = isArrayEmpty(this.data) ? [] : this.data.map((item, pos) => {
            const optionButtons = isArrayEmpty(item.options) ? [] : item.options.map((option, posItem) => {
                if(item.options.length < 10){
                    return <button className="w-[80vw] xl:text-3xl text-xl inline-block rounded-lg border-2 border-neutral-300 px-6 pb-[6px] pt-2 font-medium leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-30 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:bg-neutral-500 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900 max-w-screen-xl text-3xl h-[10vh] max-h-screen-md my-12" onClick={() => this.updateState(item.answering, option)} key={option} value={option}>{option}</button>
                } else{
                    return <option key={option} value={option}>{option}</option>;
                }
            });

            return(
                <div className="relative h-[70vh] w-full" key={item.id} style={{display: item.id === this.state.currentQuestion ? "inherit" : "none"}}>
                    <h1 className="justify-center flex text-4xl font-bold">{item.question}</h1>
                    {item.options.length < 10 ? <div className='h-full flex items-center justify-center grid grid-rows-6'>{optionButtons}</div> : 
                    <div className="h-full w-full flex items-center justify-center grid grid-rows-6">
                        <select id="s_country" onChange={() => $("#s_country").val() !== "-- Please Select --" ? this.updateState("country", $("#s_country").val()) : alert("Please select your origin.")}>{optionButtons}</select>
                    </div>}
                </div>
            );
        });

        if(this.state.currentQuestion > 4){
            console.log("End of survey");
            this.uploadData();
            // return <Navigate to="/freeflow-edu/"></Navigate>;
            return <Navigate to="/"></Navigate>;
        }

        return(
            <>
                {questionCards}
            </>
        );
    }
}

export default FirstTimeUser;