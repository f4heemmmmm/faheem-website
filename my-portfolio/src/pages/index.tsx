"use-client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
    return (
        <div className = "bg-[#0D1224] min-h-screen flex flex-col items-center justify-center px-6">
            <div className = "flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
                <div className = "text-white max-w-lg">
                    <p className = "text-lg mb-2"> hello, i am </p>
                    <h1 className = "text-4xl md:text-5xl font-bold text-red-500 mb-3"> faheem kamel </h1>
                    <p className = "text-lg mt-2 font-medium"> an aspiring software developer or cybersecurity analyst </p>
                    <div className = "mt-6 flex space-x-4 gap-2">
                        <Button className = "bg-red-500 text-white px-6 py-3 rounded-[15px] font-semibold"> my resume </Button>
                        <Button variant = "outline" className = "border-red-500 text-red-500 px-6 py-3 rounded-[15px] font-semibold"> contact me </Button>
                    </div>
                </div>
                <motion.div 
                    className = "relative mt-10 md:mt-0"
                    initial = {{ opacity: 0, scale: 0.8 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition = {{ duration: 0.6 }}
                >
                    <div className="relative w- h-48 md:w-96 md:h-96">
                        <Image
                            src = "/assets/profile-pic-2.jpg"
                            alt = "Profile Picture"
                            layout = "fill"
                            objectFit = "cover"
                            className = "rounded-full shadow-lg border-red-600 border-[2px]"
                        />
                    </div>
                </motion.div>
                <div className = "hidden md:flex fixed left-5 top-3/4 transform -translate-y-1/2 flex-col items-center space-y-4 text-white gap-2">
                    <a href = "https://github.com/f4heemmmmm" target = "_blank" rel = "noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Github size = {24} />
                    </a>
                    <a href="https://www.linkedin.com/in/faheemkamel/" target = "_blank" rel="noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Linkedin size = {24} />
                    </a>
                    <a href="https://www.instagram.com/f4heemmmm" target = "_blank" rel = "noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Instagram size = {24} />
                    </a>
                    <div className = "h-32 w-[2px] bg-white" />
                </div>
                <div className = "md:hidden fixed bottom-5 right-5 flex flex-col items-end space-y-3 text-white">
                    <a href = "https://github.com/f4heemmmmm" target = "_blank" rel = "noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Github size = {24} />
                    </a>
                    <a href = "https://www.linkedin.com/in/faheemkamel/" target="_blank" rel = "noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Linkedin size = {24} />
                    </a>
                    <a href = "https://www.instagram.com/f4heemmmm" target = "_blank" rel="noopener noreferrer" className = "text-xl hover:text-red-500 hover:scale-125 transition-all duration-100">
                        <Instagram size = {24} />
                    </a>
                </div>
            </div>
        </div>
    );
};