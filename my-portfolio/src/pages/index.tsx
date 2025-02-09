"use client";

// Import Statements
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { SkillsList } from "@/components/SkillsList";

// Section Imports
import Home from "@/components/sections/Home";
import About from "@/components/sections/About"
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Languages, Server } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";


import SkillsCard from "@/components/SkillsCard";
import Tilt from "react-parallax-tilt";


export default function Index() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        setMousePosition({ x: e.clientX , y: e.clientY });
      };
  


    return (
        <div>
            {/* HOME */}
            <section id = "home" className = "bg-[#0D1224] min-h-screen flex flex-col items-center justify-center px-6">
                <Home />
            </section>

            {/* ABOUT ME */}
            <section id="about" className="relative min-h-screen bg-gray-100 flex flex-col items-center pb-16 md:pb-24">
                {/* Background Section */}
                <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
                    <Image
                        src="/assets/images/about-me.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase text-center tracking-wide">
                            Who Am I?
                        </h2>
                    </div>
                </div>
            <About />
        </section>
            {/* EXPERIENCE */}
            <section id = "experiences" className = "min-h-screen py-12 bg-gray-600">
                <Experiences />
            </section>
        {/* PROJECTS */}
        <section id = "projects" className = "min-h-screen relative w-full px-6 sm:px-12 py-16">
            <h2 className = "text-4xl font-semibold text-center"> projects </h2>
            <p className = " text-center text-gray-600 mt-2 max-w-lg mx-auto">
                take a look at the projects i have embarked on
            </p>
            <Projects />
        </section>


        <section 
      id="skills" 
      className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Light Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 400px)`,
        }}
      />
      <Skills />

      
    </section>
        </div>
    );
};