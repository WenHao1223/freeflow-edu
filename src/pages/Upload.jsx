import React, { Component, useEffect, useState } from "react";
import withRouter from "../sharedComponents/withRouter";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { Ripple, initTE } from "tw-elements";

// solana
import SOLtoUSD from "./SOLtoUSD";

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
const storage = getStorage(firebaseApp);

class Upload extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: props.state.user,
            credential: props.state.credential,
            choice: null,
            tag: new Set(),
            thumbnailUpload: null,
            videoUpload: null,
            notesUpload: null,
            sol: 1
        }

        initTE({ Ripple });
    }

    select = (opt) => {
        $(".button_choice").attr("class", "button_choice");
        $(`#b_${opt}`).attr("class", "button_choice text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800");
        
        this.setState({
            choice: opt
        });

        if(opt==="both"){
            $("#div_video").css("display", "inherit");
            $("#div_notes").css("display", "inherit");
        } else {
            $(".div_upload").css("display", "none");
            $(`#div_${opt}`).css("display", "inherit");
        }
    }

    handleKeyPress = (e) => {
        e.preventDefault();
        if(e.key == "Enter") {
            this.uploadConfirm();
        }
    }

    handleTagKeyPress = (e) => {
        if(e.key == "Enter") {
            this.setState({
                tag: this.state.tag.add($("#t_tag").val())
            });
            $("#t_tag").val("");
            $("#div_tag").css("display", "inline-block");
        }
    }

    removeTag = (opt) => {
        this.state.tag.delete(opt);
        this.setState({
            tag: this.state.tag
        });
    }

    changeSOL = () => {
        this.setState({
            sol: $("#t_sol").val()
        })
    }

    uploadConfirm = async () => {
        const { navigate } = this.props;
        if($("#t_title").val() !== "" && $("#t_des").val() !== "" && $("#c_level").val() !== "" && $("#t_sub").val() !== "" && $("#t_lang").val() !== "" && $("#t_sol").val() !== ""){
            if($("#div_tag").html() !== ""){
                if(this.state.choice){
                    if(this.state.thumbnailUpload && ((this.state.choice === "video" && this.state.videoUpload) || (this.state.choice === "notes" && this.state.notesUpload) || (this.state.choice === "both" && this.state.videoUpload && this.state.notesUpload))){
                        if (confirm("Make sure all information are correct. You cannot edit any part anymore after material is uploaded.\n\nDo not reload the page before uploading process is not done.")){
                            $("#main").css("opacity", 0.5);
                            $("#main").css("pointerEvents", "none");
                            $("#main").attr("disabled", true);
                            const docRef = await addDoc(collection(db, "Course"), {
                                title: $("#t_title").val(),
                                des: $("#t_des").val().split("\n"),
                                eduLvl: $("#c_level").val(),
                                sub: $("#t_sub").val(),
                                lang: $("#t_lang").val(),
                                sol: parseFloat($("#t_sol").val()),
                                tag: [...this.state.tag],
                                userUID: this.state.user.uid,
                                mode: this.state.choice,
                                uploadTime: serverTimestamp(),
                                view: 0
                            });
                            console.log("Document written with ID: ", docRef.id);
        
                            let storageThumbnailRef = ref(storage, `${docRef.id}/thumbnail.jpg`);
                            await uploadBytes(storageThumbnailRef, this.state.thumbnailUpload).then(() => {
                                console.log('Uploaded thumbnail file!');
                            });
        
                            let storageVideoRef = ref(storage, `${docRef.id}/video.mp4`);
                            let storageNotesRef = ref(storage, `${docRef.id}/notes.pdf`);

                            switch(this.state.choice){
                                case "video":
                                    await uploadBytes(storageVideoRef, this.state.videoUpload).then(() => {
                                        console.log('Uploaded video file!');
                                    });
                                    break
                                case "notes":
                                    await uploadBytes(storageNotesRef, this.state.notesUpload).then(() => {
                                        console.log('Uploaded pdf file!');
                                    });
                                    break
                                case "both":
                                    await uploadBytes(storageVideoRef, this.state.videoUpload).then(() => {
                                        console.log('Uploaded video file!');
                                    });
                                    await uploadBytes(storageNotesRef, this.state.notesUpload).then(() => {
                                        console.log('Uploaded pdf file!');
                                    });
                                    break
                            }

                            $("#main").css("opacity", 1);
                            $("#main").css("pointerEvents", "inherit");
                            $("#main").attr("disabled", false);
                            await alert("Upload success!");
                            navigate("/");
                        }
                    } else {
                        alert("Please upload required image / video / notes.")
                    }
                } else {
                    alert("Please select either to upload video / notes / both.")
                }
            } else {
                alert("Please add some tags! ");
            }
        } else {
            alert("Please fill in all information required.");
        }
    }

    render(){
        console.log(this.state);
        const tagCards = (this.state.tag.size === 0) ? [] : [...this.state.tag].map((item, pos) => {
            return (
                <span data-te-ripple-init data-te-ripple-color="light" className="inline-block m-2 ms-3 me-1 text-sm rounded bg-neutral-50 px-6 pb-2 pt-2.5 leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]" key={item} id={"tag_"+item}>
                    {item}
                    <button data-te-ripple-init data-te-ripple-color="light" className="ms-2 inline-block rounded px-3 pb-1 pt-1.5 font-medium leading-normal text-danger transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]" onClick={() => this.removeTag(item)}>x</button>
                </span>
            );
        });

        return(
            <section id="main" className="max-w-xl mx-auto divide-y md:max-w-4xl">
                <div className="py-8 border-b">
                    <h1 className="text-4xl font-bold">Upload</h1>
                    <p className="mt-3 text-lg text-gray-500">Sculpting Futures, Unleasing Knowledge: FreeFlow Edu, Where Learning Knows No Bounds!</p>
                </div>

                <div className="div_general py-6">
                    <h2 className="text-2xl font-bold">General</h2>
                    <p className="m5-3 text-lg text-gray-500">This is where the course description will be displayed to the Homepage of our FreeFlow Edu App.</p>
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-600">Course Title: </span>
                                <input onKeyUp={this.handleKeyPress} type="text" name="t_tile" id="t_title" className="mt-1 block w-full" placeholder="Trigonometry" required/>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Course Description: </span>
                                <textarea name="t_des" id="t_des" className="mt-1 block w-full" placeholder="Write something here..." required/>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Level: </span>
                                <select className="block w-full mt-1" id="c_level" required>
                                    <option value="">-- Please select --</option>
                                    <option value="primary">Primary School</option>
                                    <option value="secondary">Secondary School</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="postgraduate">Postgraduate</option>
                                    <option value="workplace">Workplace</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Subject: </span>
                                <input onKeyUp={this.handleKeyPress} type="text" name="t_sub" id="t_sub" className="mt-1 block w-full" placeholder="Mathematics" required/>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Language: </span>
                                <input onKeyUp={this.handleKeyPress} type="text" name="t_lang" id="t_lang" className="mt-1 block w-full" placeholder="English" required/>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Sell for Solana of : </span>
                                <input onKeyUp={this.handleKeyPress} onChange={this.changeSOL} type="number" name="t_sol" id="t_sol" className="mt-1 block w-full" placeholder="0.00" required/>
                                <br />{this.state.sol} SOL = {<SOLtoUSD sol={this.state.sol}/>} USD
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Tag: </span>
                                <input onKeyUp={this.handleTagKeyPress} type="text" name="t_tag" id="t_tag" className="mt-1 block w-full" placeholder="Write some keywords here..."/>
                            </label>
                            <div style={{display: "none"}} id="div_tag">
                                {tagCards}
                            </div>
                            <label className="block">
                                <span className="text-gray-600">Author: </span>
                                <input type="text" name="t_author_uid" id="t_author_uid" className="mt-1 block w-full" value={this.state.user.email} disabled/>
                            </label>
                            <label className="block" forhtml="f_notes">
                                <span className="text-gray-600">Upload Thumbnail: </span>
                                <input className="mt-1 block w-full relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" id="f_thumbnail" accept=".jpg" onChange={(e) => this.setState({thumbnailUpload: e.target.files[0]})}/>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="py-6 grid grid-cols-3 gap-4">
                    <button className="button_choice" id="b_video" onClick={() => this.select("video")}>Video</button>
                    <button className="button_choice" id="b_notes" onClick={() => this.select("notes")}>Notes</button>
                    <button className="button_choice" id="b_both" onClick={() => this.select("both")}>Both</button>
                </div>

                <div id="div_video" className="div_upload pb-2 !border-0" style={{display: "none"}}>
                    <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
                    <div className="mb-3">
                        <label forhtml="f_notes">
                            <input className="mt-1 block w-full relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" id="f_video" accept=".mp4" onChange={(e) => this.setState({videoUpload: e.target.files[0]})}/>
                        </label>
                    </div>
                </div>
    
                <div id="div_notes" className="div_upload pb-2 !border-0" style={{display: "none"}}>
                    <h2 className="text-2xl font-bold mb-4">Upload Notes</h2>
                    <div className="mb-3">
                        <label forhtml="f_notes">
                            <input className="mt-1 block w-full relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" id="f_notes" accept=".pdf" onChange={(e) => this.setState({notesUpload: e.target.files[0]})}/>
                        </label>
                    </div>
                </div>
    

                <div className="py-6">
                    <button className="inline-block rounded bg-primary px-8 pb-3 pt-4 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={this.uploadConfirm}>Upload</button>
                </div>
            </section>
        );
    }
}

export default withRouter(Upload);