"use client";

// Import Statements
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Section Imports
import Home from "@/components/sections/Home";
import About from "@/components/sections/About"
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Main() {
    // Enhanced mouse position tracking with smoothing
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    
    // Track if the mouse is within the Skills section
    const [isMouseInSection, setIsMouseInSection] = useState(false);

    // Handle mouse movement with relative positioning
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        // Get the section element
        const section = document.getElementById('skills');
        if (!section) return;
        
        // Calculate mouse position relative to the section
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
    };

    // Handle mouse enter/leave events
    const handleMouseEnter = () => {
        setIsMouseInSection(true);
    };
    
    const handleMouseLeave = () => {
        setIsMouseInSection(false);
    };

    // Smooth animation effect using useEffect
    useEffect(() => {
        let animationFrameId: number;
        
        // Animation function for smooth movement
        const animateLight = () => {
            setSmoothPosition(prevPos => {
                // Calculate the distance between current and target positions
                const dx = mousePosition.x - prevPos.x;
                const dy = mousePosition.y - prevPos.y;
                
                // Apply easing factor (0.1 means it will move 10% of the remaining distance each frame)
                // Adjust this value to change the smoothness (lower = smoother but slower)
                const easing = 0.08;
                
                return {
                    x: prevPos.x + dx * easing,
                    y: prevPos.y + dy * easing
                };
            });
            
            animationFrameId = requestAnimationFrame(animateLight);
        };
        
        // Start the animation
        animationFrameId = requestAnimationFrame(animateLight);
        
        // Clean up animation frame on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]);

    return(
        <div>
            {/* SECTION 1: HOME */}
            <section id="home" className="bg-[#0D1224] min-h-screen flex flex-col items-center justify-center px-6">
                <Home />
            </section>
            {/* SECTION 2: ABOUT ME */}
            <section id="about" className="min-h-screen relative bg-gray-300 flex flex-col items-center ">
                <About />
            </section>
            {/* SECTION 3: EXPERIENCES */}
            <section id="experiences" className="min-h-screen py-12 bg-gray-600">
                <Experiences />
            </section>
            {/* SECTION 4: PROJECTS */}
            <section id="projects" className="min-h-screen relative w-full px-6 sm:px-12 py-16">
                <h2 className="text-4xl font-semibold text-center"> projects </h2>
                <p className="text-center text-gray-500 mt-6 max-w-lg mx-auto mb-8">
                    take a look at some of the projects that i have embarked on.
                </p>
                <Projects />
            </section>
            {/* SECTION 5: SKILLS */}
            <section 
                id="skills" 
                className="min-h-screen relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden items-center" 
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Enhanced interactive light effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        opacity: isMouseInSection ? 1 : 0
                    }}
                    transition={{
                        opacity: { duration: 0.5 }
                    }}
                    style={{
                        background: `radial-gradient(
                            circle at ${smoothPosition.x}px ${smoothPosition.y}px, 
                            rgba(255, 255, 255, 0.2) 0%, 
                            rgba(255, 255, 255, 0.15) 20%, 
                            rgba(255, 255, 255, 0.05) 40%, 
                            transparent 70%
                        )`,
                        backdropFilter: 'blur(1px)'
                    }}
                />
                <Skills />
            </section>
        </div>
    );
};