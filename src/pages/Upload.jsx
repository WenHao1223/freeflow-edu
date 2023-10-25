import React, { Component, useEffect, useState } from "react";
import withRouter from "../sharedComponents/withRouter";
// import { useNavigate, Navigate } from "react-router-dom";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
    }

    select = (opt) => {
        $(".button_choice").attr("class", "button_choice");
        $(`#b_${opt}`).attr("class", "button_choice text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800");
        
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
            $("#t_tag").val("")
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
                                sol: $("#t_sol").val(),
                                tag: [...this.state.tag],
                                userUID: this.state.user.uid,
                                mode: this.state.choice
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
                            navigate("/freeflow-edu/");
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
                <span key={item} id={"tag_"+item}>
                    {item}
                    <button onClick={() => this.removeTag(item)}>x</button>
                </span>
            );
        });

        return(
            <section id="main">
                <h1>Upload</h1>

                <div className="div_general">
                    <label> Course Title: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_tile" id="t_title" placeholder="Trigonometry" required/>
                    </label>
                    <br/>
                    <label> Course Description: 
                        <textarea name="t_des" id="t_des" placeholder="Write something here..." required/>
                    </label>
                    <br/>
                    <label> Level: 
                        <select name="" id="c_level" required>
                            <option value="">-- Please select --</option>
                            <option value="primary">Primary School</option>
                            <option value="secondary">Secondary School</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="workplace">Workplace</option>
                        </select>
                    </label>
                    <label> Subject: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_sub" id="t_sub" placeholder="Mathematics" required/>
                    </label>
                    <label> Language: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_lang" id="t_lang" placeholder="English" required/>
                    </label>
                    <br />
                    <label> Sell for $: 
                        <input onKeyUp={this.handleKeyPress} onChange={this.changeSOL} type="number" name="t_sol" id="t_sol" placeholder="0.00" required/> Solana
                        <br />{this.state.sol} SOL = {<SOLtoUSD sol={this.state.sol}/>} USD
                    </label>
                    <br/>
                    <label> Tag: 
                        <input onKeyUp={this.handleTagKeyPress} type="text" name="t_tag" id="t_tag" placeholder="Write some keywords here..."/>
                    </label>
                    <div id="div_tag">
                        {tagCards}
                    </div>
                        <br/>
                    <label> Author: 
                        <input type="text" name="t_author_uid" id="t_author_uid" value={this.state.user.email} disabled/>
                    </label>
                    <br/>
                    <label> Thumbnail: 
                        <input type="file" onChange={(e) => this.setState({thumbnailUpload: e.target.files[0]})} name="vid" id="f_thumbnail" accept=".jpg"/>
                    </label>
                </div>
                <br />
                <hr />
                <br />

                <div>
                    <button className="button_choice"  id="b_video" onClick={() => this.select("video")}>Video</button>
                    <button className="button_choice"  id="b_notes" onClick={() => this.select("notes")}>Notes</button>
                    <button className="button_choice"  id="b_both" onClick={() => this.select("both")}>Both</button>
                </div>
    
                <div id="div_video" className="div_upload" style={{display: "none"}}>
                    <h1>Video</h1>
                    <label>Upload Video: 
                        <input type="file" onChange={(e) => this.setState({videoUpload: e.target.files[0]})} name="vid" id="f_video" accept=".mp4"/>
                    </label>
                    <br />
                </div>
    
                <div id="div_notes" className="div_upload" style={{display: "none"}}>
                    <h1>Notes</h1>
                    <label>Upload Notes: 
                        <input type="file" onChange={(e) => this.setState({notesUpload: e.target.files[0]})} name="vid" id="f_notes" accept=".pdf"/>
                    </label>
                    <br />
                </div>
                <br />
                <hr />
                <br />
                <button onClick={this.uploadConfirm}>Upload</button>
            </section>
        );
    }
}

export default withRouter(Upload);