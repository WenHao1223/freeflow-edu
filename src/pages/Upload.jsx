import React, { Component, useEffect, useState } from "react";

const handleKeyPress = (e) => {
    e.preventDefault();
    if(e.key == "Enter") {
        console.log("enter");
    }
}

const uploadConfirm = () => {
    console.log("Upload button pressed");
}

class Upload extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: props.state.user,
            credential: props.state.credential,
            tag: new Set()
        }
    }

    select = (opt) => {
        $(".button_choice").attr("class", "button_choice");
        $(`#b_${opt}`).attr("class", "button_choice text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800");

        if(opt==="both"){
            $("#div_video").css("display", "inherit");
            $("#div_notes").css("display", "inherit");
        } else {
            $(".div_upload").css("display", "none");
            $(`#div_${opt}`).css("display", "inherit");
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
                    <button className="button_choice"  id="b_video" onClick={() => select("video")}>Video</button>
                    <button className="button_choice"  id="b_notes" onClick={() => select("notes")}>Notes</button>
                    <button className="button_choice"  id="b_both" onClick={() => select("both")}>Both</button>
                </div>
                <div className="div_general">
                    <label> Course Title: 
                        <input onKeyUp={handleKeyPress} type="text" name="t_tile" id="t_title" placeholder="e.g. Trigonometry" required/>
                    </label>
                    <br/>
                    <label> Course Description: 
                        <textarea onKeyUp={handleKeyPress} name="t_des" id="t_des" placeholder="Write something here..." required/>
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
                        <input onKeyUp={handleKeyPress} type="text" name="t_sub" id="t_sub" placeholder="e.g. Mathematics" required/>
                    </label>
                    <label> Language: 
                        <input onKeyUp={handleKeyPress} type="text" name="t_lang" id="t_sub" placeholder="e.g. English" required/>
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
                        <input type="file" name="vid" id="t_author_uid" accept=".jpg"/>
                    </label>
                </div>
                <br />
                <hr />
                <br />
    
                <div id="div_video" className="div_upload">
                    <h1>Video</h1>
                    <label>Upload Video: 
                        <input type="file" name="vid" id="t_author_uid" accept=".mp4"/>
                    </label>
                    <br />
                </div>
    
                <div id="div_notes" className="div_upload">
                    <h1>Notes</h1>
                    <label>Upload Notes: 
                        <input type="file" name="vid" id="t_author_uid" accept=".pdf"/>
                    </label>
                    <br />
                </div>
                <br />
                <hr />
                <br />
                <button onClick={uploadConfirm}>Upload</button>
            </>
        );
    }
}

export default Upload;