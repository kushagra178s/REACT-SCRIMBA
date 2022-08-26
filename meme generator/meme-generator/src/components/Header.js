import React from "react";

export default function Header () {
    return (
        <header>
        <img src = {require("../images/troll-face.png")} 
        className="header--image"
        />
        <h2 className="header--title">Header Component</h2>
        <h4 className="header--project">React Course Project Meme Genrator</h4>
        </header>
    )
}