// Import Statements
import React from "react";
import Image from "next/image";

function About() {
    return (
        <div className = "relative bg-gray-200 shadow-xl rounded-[15px] p-6 md:p-10 w-[90%] md:w-[75%] lg:w-[60%] mt-[-50px] mb-2">
            {/*
                CHANGE TEXT COLOR TO DARK GREY PASTEL COLOR
            */}
            {/* SHORT INTRODUCTION */}
            <p className = "text-lg text-gray-800 leading-relaxed text-center">
                Hello world! I am <span className = "font-semibold"> Faheem Kamel </span>, an undergraduate studying 
                <span className = "font-semibold"> Computer Science </span> at 
                <span className = "font-semibold"> Singapore Management Unversity </span>. I am also majoring in 
                <span className = "font-semibold"> Cybersecurity! </span>.
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed">
                My coding journey started in Junior College when I took Computing as one of my GCE A-Levels subjects. It was 
                initially a struggle - I failed every exam, test, quiz and even flunked my prelims, which was a month before the A-Levels exam. 
                I just could not understand the syntax of Python, let alone logic of implementing OOP (object-oriented programming) or sorting algorithms. 
                However, I took a step back, re-learnt everything from scratch, and dedicated at least three hours daily to coding. I practiced with questions 
                given by my school, questions from past year papers, sourced for external challenges like Project Euler, and sought help from my peers. 
                This dedication led to a 5-grade jump improvement, and now, here I am, pursuing a field I once struggled (and failed) in.
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed">
                Beyond academics, I am passionate about sports, especially soccer and floorball. I am a varsity floorball player 
                at my university since 2024 and I also play for an external club, Woodlands CSC Skyhawks.
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed">
                I also love travelling and have visited around 18 countries! I enjoy immersing myself in the cultures of different countries, trying out their local 
                cuisines and experiencing life as the locals do. Alongside my passion for travel, I also have a love for photography, and you can see the world through my eyes in the pictures below!"
            </p>
        </div>
    );
};

export default About;