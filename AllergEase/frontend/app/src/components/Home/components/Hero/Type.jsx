import "./hero.css";
import React from 'react';
import Typewriter from "typewriter-effect";

export default function Type(){
    return (
        <div className="hero-typer">
            <Typewriter
                options={{
                strings: ['Educate', 'Learn','Grow'],
                autoStart: true,
                loop: true,
                }}
            />
        </div>
    );
}