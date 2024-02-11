import "./notes.css";
import { React, useState } from "react";


export default function Notes() {
    const [data, setData] = useState(" ");
    function getData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"excerpt":document.getElementById("textArea").value})
        };
        fetch('https://realisticspecializedutility.shleshsakpal1.repl.co/notes', requestOptions)
            .then(response => response.json())
            .then(dat => {
                console.log(dat.sentence);
                setData(dat);
            });
        
        
    }
    return (
        
        <div className="essay">

            <div class="top">
                <textarea
                placeholder="Type in your notes/reading/lectures/etc. (copy and paste) into here"
                id="textArea"
                className="texbx"
                rows="20"
                cols="60"
                />
            </div>
            <div class="submit bt">
                <button onClick={getData} className="bt">Summarize</button>
            </div>


            <div>
                <p className="hero-typer">Summary Notes</p>
            </div>
            <div className="right">
                <p className="subheadingtwo comments" id="comments">{data.sentence}</p>
            </div>
        </div>
        
    )
}