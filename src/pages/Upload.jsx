import React, { Component, useEffect, useState } from "react";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
            notesUpload: null
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

    uploadConfirm = async () => {
        if($("#t_title").val() !== "" & $("#t_des").val() !== "" & $("#c_level").val() !== "" & $("#t_sub").val() !== "" & $("#f_thumbnail").val() !== "" && this.state.thumbnailUpload !== null){
            if($("#div_tag").html() !== ""){
                if (confirm("Make sure all information are correct. You cannot edit any part anymore after material is uploaded.")){
                    const docRef = await addDoc(collection(db, "Course"), {
                        title: $("#t_title").val(),
                        des: $("#t_des").val(),
                        eduLvl: $("#c_level").val(),
                        sub: $("#t_sub").val(),
                        lang: $("#t_lang").val(),
                        tag: [...this.state.tag],
                        userUID: this.state.user.uid,
                        mode: this.state.choice
                    });
                    console.log("Document written with ID: ", docRef.id);

                    let storageRef = ref(storage, `${docRef.id}/thumbnail.jpg`);

                    uploadBytes(storageRef, this.state.thumbnailUpload).then(() => {
                        console.log('Uploaded thumbnail file!');
                    });

                    switch(this.state.choice){
                        case "video":
                            break
                        case "notes":
                            break
                        case "both":
                            break
                    }
                }
            } else {
                alert("Please add some tags! ");
            }
        } else {
            alert("Please fill in all information required.");
        }
    }

    render(){
        const tagCards = (this.state.tag.size === 0) ? [] : [...this.state.tag].map((item, pos) => {
            return (
                <span key={item} id={"tag_"+item}>
                    {item}
                    <button onClick={() => this.removeTag(item)}>x</button>
                </span>
            );
        });

        return(
            <>
                <h1>Upload</h1>
    
                <div>
                    <button className="button_choice"  id="b_video" onClick={() => this.select("video")}>Video</button>
                    <button className="button_choice"  id="b_notes" onClick={() => this.select("notes")}>Notes</button>
                    <button className="button_choice"  id="b_both" onClick={() => this.select("both")}>Both</button>
                </div>
                <div className="div_general">
                    <label> Course Title: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_tile" id="t_title" placeholder="e.g. Trigonometry" required/>
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
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_sub" id="t_sub" placeholder="e.g. Mathematics" required/>
                    </label>
                    <label> Language: 
                        <input onKeyUp={this.handleKeyPress} type="text" name="t_lang" id="t_lang" placeholder="e.g. English" required/>
                    </label>
                    <br/>
                    <label> Tag: 
                        <input onKeyUp={this.handleTagKeyPress} type="text" name="t_tag" id="t_tag" placeholder="Write some keywords here..."/>
                    </label>
                    <div id="div_tag">
                        {tagCards}
                        {/* <span id="tag_test">
                            test
                            <button onClick={() => removeTag("test")}>x</button>
                        </span>
                        <span id="tag_test2">
                            test2
                            <button onClick={() => removeTag("test2")}>x</button>
                        </span> */}
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
    
                <div id="div_video" className="div_upload">
                    <h1>Video</h1>
                    <label>Upload Video: 
                        <input type="file" name="vid" id="f_video" accept=".mp4"/>
                    </label>
                    <br />
                </div>
    
                <div id="div_notes" className="div_upload">
                    <h1>Notes</h1>
                    <label>Upload Notes: 
                        <input type="file" name="vid" id="f_notes" accept=".pdf"/>
                    </label>
                    <br />
                </div>
                <br />
                <hr />
                <br />
                <button onClick={this.uploadConfirm}>Upload</button>
            </>
        );
    }
}

export default Upload;