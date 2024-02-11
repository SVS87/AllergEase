import "./flashcards.css";
import { React, useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, Grid } from "@material-ui/core";


export default function Flashcards() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(" ");

    
    function getData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"topic":document.getElementById("topic").value})
        };
        fetch('https://realisticspecializedutility.shleshsakpal1.repl.co/flashcard', requestOptions)
            .then(response => response.json())
            .then(dat => {
                setData(dat.flashcards);
                setLoaded(true);
                console.log(data);

                
            });
    }

    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
  
    // Function to move to the next card
    const nextCard = () => {
      setCurrentCard(currentCard + 1);
    }
  
    // Function to move to the previous card
    const prevCard = () => {
      setCurrentCard(currentCard - 1);
    }
  
    // Function to toggle card flipped
    const toggleCardFlip = () => {
      setIsFlipped(!isFlipped);
    }
    

    

    


    return (
        <div className="flashcard-cont">
            <div className="top">
                <Input 
                    bordered
                    labelPlaceholder="Card Topic"
                    className="texbx" 
                    color="secondary"
                    id="topic"
                />
            </div>
            <div class="submit bt">
                <button onClick={getData} className="bt">Submit</button>
            </div>
            

            <div className="flashcard-bottom">
                
                {loaded && <div className="flash-cards">
                    {/* Display the current cards front or back part based on the flag */}
                    <h2>{isFlipped ? data[currentCard].back : data[currentCard].front}</h2>
                    <button onClick={toggleCardFlip}>flip</button>
                    {currentCard > 0 && 
                    <button onClick={prevCard}>Previous</button>
                    }
                    {currentCard < data.length - 1 && 
                    <button onClick={nextCard}>Next</button>
                    }
                </div>}
            </div>
        </div>
    );
}