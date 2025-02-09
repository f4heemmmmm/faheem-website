"use client";

// Import Statements
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Section Imports
import Home from "@/components/sections/Home";
import About from "@/components/sections/About"
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";



export default function Main() {
    // Consts for 'Skills' section effects.
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: { clientX: any; clientY: any;}) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }

    return(
        <div>
            {/* SECTION 1: HOME */}
            <section id = "home" className = "bg-[#0D1224] min-h-screen flex flex-col items-center justify-center px-6">
                <Home />
            </section>
            {/* SECTION 2: ABOUT ME */}
            <section id = "about" className = "min-h-screen relative bg-gray-300 flex flex-col items-center pb-16 md:pb-24">
                <div className = "relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
                    <Image
                        src = "/assets/images/about-me.jpg"
                        alt = "background image"
                        layout = "fill"
                        objectFit = "cover"
                        className = "opacity-80"
                    />
                    <div className = "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className = "text-5xl md:text-7xl font-bold text-white uppercase text-center tracking-wide"> SO...WHO AM I? </h2>
                    </div>
                </div>
                <About />
            </section>
            {/* SECTION 3: EXPERIENCES */}
            <section id = "experiences" className = "min-h-screen py-12 bg-gray-600">
                <Experiences />
            </section>
            {/* SECTION 4: PROJECTS */}
            <section id = "projects" className = "min-h-screen relative w-full px-6 sm:px-12 py-16">
                <h2 className = "text-4xl font-semibold text-center"> projects </h2>
                <p className = "text-center text-gray-600 mt-2 max-w-lg mx-auto">
                    take a look at some of the projects that i have embarked on.
                </p>
                <Projects />
            </section>
            {/* SECTION 5: SKILLS */}
            <section id = "skills" className = "min-h-screen relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden" onMouseMove = {handleMouseMove}>
                <motion.div
                    className = "absolute inset-0 pointer-events-none"
                    style = {{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 400px)`
                    }}
                />
                <Skills />
            </section>
        </div>
    );
};