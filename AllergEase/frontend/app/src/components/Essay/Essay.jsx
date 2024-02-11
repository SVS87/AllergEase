import "./essay.css";
import { React, useState } from "react";


export default function Essay() {
    const [data, setData] = useState(" ");
    function getData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"essay":document.getElementById("textArea").value})
        };
        var t = document.getElementById("comments");
        fetch('https://realisticspecializedutility.shleshsakpal1.repl.co/essay', requestOptions)
            .then(response => response.json())
            .then(dat => {
                console.log(dat.comments);
                setData(dat);
            });
        
        
    }
    return (
        
        <div className="essay">

            <div class="top">
                <textarea
                placeholder="Type in your essay here!"
                id="textArea"
                className="texbx"
                rows="20"
                cols="60"
                />
            </div>
            <div class="submit bt">
                <button onClick={getData} className="bt">Review Your Essay</button>
            </div>


            <div>
                <p className="hero-typer">Comments About Your Essay:</p>
            </div>
            <div className="right">
                <p className="subheadingtwo comments" id="comments">{data.comments}</p>
            </div>
        </div>
        
    )
}