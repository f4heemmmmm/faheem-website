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
                Hello World! I am <span className = "font-semibold"> Faheem Kamel, </span> an undergraduate studying 
                <span className = "font-semibold"> Computer Science </span> at 
                <span className = "font-semibold"> Singapore Management Unversity (SMU). </span> I am also majoring in 
                <span className = "font-semibold"> Cybersecurity! </span>
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed text-justify">
                My coding journey started in Junior College when I took Computing as one of my GCE A-Levels subjects. It was 
                initially a struggle - I failed every exam, test, quiz and even flunked my prelims, which was a month right before the A-Levels exam. 
                I just could not understand the syntax of Python, let alone the logic of implementing OOP (object-oriented programming) or sorting algorithms. 
                However, I took a step back, re-learnt everything from scratch, and dedicated at least three hours daily to coding. I practiced with questions 
                given by my school, questions from past year papers, sourced for external challenges like Project Euler, and sought help from my peers. 
                This dedication led to a 5-grade jump improvement in one month, and now, here I am, pursuing a degree in a field I once struggled (and failed) with.
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed text-justify">
               Apart from Computing, I have an intense love for Mathematics. I have to give credit to my Secondary School Mathematics teacher for instilling such a deep 
               appreciation for Mathematics, which was further nurtured by my Junior College Mathematics teacher. I find Maths beautiful, with its logic and structure that it brings to the world. 
               It is a language of patterns, a tool for understanding the universe. Honestly, I enjoy solving Maths problems, and the thrill of being able to solve one after hours of effort is such an 
               unmatched feeling. 
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed text-justify">
                Beyond academics, I am passionate about sports, especially Soccer and Floorball. My favorite team is Manchester United, unfortunately. 
                I originally started out as a Field Hockey player in Secondary School before transitioning to Floorball in Junior College. 
                I have played Floorball for my Junior College, my police division during National Service and (my current) University team. I also play for an external club, Woodlands CSC Skyhawks. 
            </p>
            <div className = "border-t border-gray-300 my-6" />
            <p className = "text-md text-gray-700 leading-relaxed text-justify">
                I also love travelling and have visited around 18 countries! I enjoy immersing myself in the cultures of different countries, trying out their local 
                cuisines and experiencing life as they do. There's always something about trying new things, but trying new things in a new place just makes the experience 
                a better one. Alongside my passion for travel, I also have a love for photography, and you can see the world through my eyes in some of the pictures below!
            </p>
        </div>
    );
};

export default About;