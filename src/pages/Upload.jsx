import React, { Component, useState } from "react";

const handleKeyPress = (e) => {
    e.preventDefault();
    if(e.key == "Enter") {
        console.log("enter");
    }
}

const handleTagKeyPress = (e) => {
    if(e.key == "Enter") {
        console.log("enter tag");
    }
}

const Upload = (props) => {
    const [user, setUser] = useState(props.state.user);
    const [credential, setCredential] = useState(props.state.credential);

    const select = (props) => {
        $(".button_choice").attr("class", "button_choice");
        $(`#b_${props}`).attr("class", "button_choice text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800");
    }
    
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
                    <input onKeyUp={handleTagKeyPress} type="text" name="t_tag" id="t_tag" placeholder="Write some keywords here..." required/>
                </label>
                <div id="div_tag">
                    <span>
                        test
                        <button>x</button>
                    </span>
                    <span>
                        test2
                        <button>x</button>
                    </span>
                </div>
                <br/>
                <label> Author: 
                    <input type="text" name="t_author_uid" id="t_author_uid" value={props.state.user.email} disabled/>
                </label>
                <br/>
                <label> Thumbnail: 
                    <input type="file" name="vid" id="t_author_uid" accept=".jpg"/>
                </label>
            </div>
            <br />
            <hr />
            <br />
            <div class="divVideo">
                <h1>Video</h1>
                <label> Upload Video: 
                    <input type="file" name="vid" id="t_author_uid" accept=".mp4"/>
                </label>
            </div>
            
            <br />
            <div class="divVideo">
                <h1>Notes</h1>
                <label> Video: 
                    <input type="file" name="vid" id="t_author_uid" accept=".pdf"/>
                </label>
            </div>
        </>
    );
};

export default Upload;