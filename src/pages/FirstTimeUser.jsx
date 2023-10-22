import React, { Component, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { countries } from 'countries-list';
import { isArrayEmpty } from '../sharedComponents/utils';

class FirstTimeUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
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

    render() {
        console.log(this.state)
        if(this.state.user){
            if (this.state.user.metadata.creationTime === this.state.user.metadata.lastSignInTime) {
                console.log("first-time user");
            } else {
                // return <Navigate to="/freeflow-edu"></Navigate>
            }
        } else {
            // return <Navigate to="/freeflow-edu"></Navigate>
        }

        const questionCards = isArrayEmpty(this.data) ? [] : this.data.map((item, pos) => {
            const optionButtons = isArrayEmpty(item.options) ? [] : item.options.map((option, posItem) => {
                if(item.options.length < 10){
                    return <button onClick={() => this.updateState(item.answering, option)} key={option} value={option}>{option}</button>
                } else{
                    return <option key={option} value={option}>{option}</option>;
                }
            });

            return(
                <div key={item.id} style={{display: item.id === this.state.currentQuestion ? "inherit" : "none"}}>
                    <h3>Question {item.id}: {item.question}</h3>
                    {item.options.length < 10 ? optionButtons : <select id="s_country" onChange={() => $("#s_country").val() !== "-- Please Select --" ? this.updateState("country", $("#s_country").val()) : alert("Please select your origin.")}>{optionButtons}</select>}
                </div>
            );
        });

        if(this.state.currentQuestion > 4){
            console.log("End of survey");
        }

        return(
            <>
                <h1>First Time Login Q&A</h1>
                {questionCards}
            </>
        );
    }
}

export default FirstTimeUser;