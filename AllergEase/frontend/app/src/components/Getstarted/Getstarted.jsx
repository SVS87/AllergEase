import './getstarted.css';
import React from 'react';
import { Link } from "react-router-dom";




export default function Getstarted() {


    return (
        <div className="bg">
            <div class="container-getstarted">
                <div className="hero-typer">
                    <p>Get Started with StudyBoat</p>
                </div>
                
                <div className="getStartedCard">
                    <div className="heading-under-type">
                        <p>Essay Support tool</p>
                    </div>
                    <div class="submit">
                        <Link to="/essay"><button  class="submit" type="button"><b><p class="subheadingtwo">Get intuitive esssay comments</p></b></button></Link>
                    </div>
                </div>
                <div className="getStartedCard">
                    <div className="heading-under-type">
                        <p>Flashcard Generator</p>
                    </div>
                    <div class="submit">
                        <Link to ="/flashcards"><button class="submit" type="button"><b><p class="subheadingtwo">Learn with smart flashcards</p></b></button></Link>
                    </div>
                </div>

                <div className="getStartedCard">
                    <div className="heading-under-type">
                        <p>Notes Generator</p>
                    </div>
                    <div class="submit">
                        <Link to="/notes"><button class="submit" type="button"><b><p class="subheadingtwo">Get useful notes to study</p></b></button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
                        
