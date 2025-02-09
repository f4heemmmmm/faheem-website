// Import Statements
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

function Home() {
    return (
        <div className = "flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
            <div className = "text-white max-w-lg">
                <p className = "text-xl mb-3"> hello, i am </p>
                <h1 className = "text-6xl md:text-7xl font-bold text-red-500 mb-4"> faheem kamel </h1>
                <p className = "text-xl mt-2 font-medium"> an aspiring software developer or cybersecurity analyst. </p>
                <div className = "mt-6 flex space-x-4 gap-2">
                    <a
                        href = "/assets/faheem_kamel_resume.pdf"
                        target = "_blank"
                        rel = "noopener noreferrer"
                    >
                        {/* MY RESUME BUTTON */}
                        <Button className = "bg-red-500 text-white px-6 py-3 rounded-[12px] font-semibold items-center transition-transform duration-300 transform hover:scale-125">
                            my resume
                        </Button>
                    </a>
                    {/* ADD LINK TO CONTACT ME PAGE */}
                    <Button variant = "outline" className = "border-red-500 text-red-500 px-6 py-3 rounded-[12px] items-center font-semibold transition-transform duration-300 transform hover:scale-125">
                        contact me
                    </Button>
                </div>
            </div>
            <motion.div
                className = "relative mt-10 md:mt-0"
                initial = {{ opacity: 0, scale: 0.8 }}
                animate = {{ opacity: 1, scale: 1 }}
                transition = {{ duration: 0.6 }}
            >
                {/* PROFILE PICTURE */}
                <div className = "relative w-48 h-48 md:w-96 md:h-96">
                    <Image
                        src = "/assets/images/profile-pic-2.jpg"
                        alt = "faheem's profile pic"
                        layout = "fill"
                        objectFit = "cover"
                        className = "rounded-full shadow-lg border-red-600 border-[2px]"
                    />
                </div>
            </motion.div>
            {/* SOCIAL MEDIA ICONS - DESKTOP VIEW */}
            <div className = "hidden md:flex absolute left-5 top-3/4 transform -translate-y-1/2 flex-col items-center space-y-4 text-white gap-2">
                {/* GITHUB */}
                <a
                    href = "https://github.com/f4heemmmmm"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Github size = {24} />
                </a>
                {/* LINKEDIN */}
                <a
                    href = "https://linkedin.com/in/faheemkamel/"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Linkedin size = {24} />
                </a>
                {/* INSTAGRAM */}
                <a
                    href = "https://instagram.com"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Instagram size = {24} />
                </a>
                <div className = "h-32 w-[2px] bg-white" />
            </div>
            {/* SOCIAL MEDIA ICONS - MOBILE VIEW */}
            <div className = "md:hidden absolute bottom-5 right-5 flex flex-col items-end space-y-3 text-white gap-2">
                {/* GITHUB */}
                <a
                    href = "https://github.com/f4heemmmmm"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Github size = {24} />
                </a>
                {/* LINKEDIN */}
                <a
                    href = "https://linkedin.com/in/faheemkamel/"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Linkedin size = {24} />
                </a>
                {/* INSTAGRAM */}
                <a
                    href = "https://instagram.com/f4heemmmm"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-xl hover:text-red-500 hover:scale-125 transition-transform duration-300"
                >
                    <Instagram size = {24} />
                </a>
            </div>
        </div>
    );
};

export default Home;