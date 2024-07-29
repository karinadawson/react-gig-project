import React, { useState } from 'react';
import "./Die.css"

const Die = () => {
    const [number, setNumber] = useState("");

    const rollDie = () => {
        setNumber(Math.floor(Math.random() * 6) + 1)
    } 

    return (
        <div>
            <h1>Dice Roller</h1>
            <p>Roll result: {number}</p>
            <br />
            <br />
            <button className="dice-button" onClick={rollDie}>Roll</button>
        </div>
    );
};

export default Die