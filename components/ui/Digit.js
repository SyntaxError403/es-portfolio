"use client"
import React from 'react';

const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?-_'
let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
const Digit = () => {
    return(
        <div style={{width: 45, 
        height: 90, 
        borderColor: "#2e3c51", 
        borderWidth: 3,
        alignContent:"center", 
        textAlign: "center",
        fontSize: 34, 
        color: "#bfc7d2"
        }} >
            <text>{randomChar}</text>
        </div>
    )
}

export default Digit;