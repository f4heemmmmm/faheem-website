// Import Statements
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
    const [hovered, setHovered] = useState(false);

    // My Experience Title
    if (index === 0) {
        return (
            <div className = "relative w-full aspect-square bg-black text-white flex items-center justify-center shadow-lg p-6" style = {{ fontFamily: "'Cormorant Garamond', serif" }}>
                <h3 className = "text-5xl font-medium"> my <br /> experiences. </h3>
            </div>
        );
    };

    return (
        <div
            className = "relative w-full aspect-square cursor-pointer overflow-hidden shadow-lg"
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() => setHovered(false)}
            onClick = {() => setHovered(!hovered)}
        >
            <AnimatePresence mode = "wait">
                {!hovered ? (
                    <motion.div
                        key = "front"
                        initial = {{ opacity: 0, scale: 0.9 }}
                        animate = {{ opacity: 1, scale: 1 }}
                        exit = {{ opacity: 0, scale: 1.05 }}
                        transition = {{ duration: 0.2, ease: "easeInOut" }}
                        className = "absolute inset-0 w-full h-full bg-black text-white flex items-center justify-center p-2"
                        style = {{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        <img
                            src = {experience.image}
                            alt = {experience.title}
                            className = "absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className = "flex flex-col">
                            <h3 className = "relative text-xl font-medium text-center"> {experience.title} </h3>
                            <h3 className = "relative text-sm font-bold text-center italic"> {experience.date} </h3>
                        </div>
                        
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-[#444444] text-white flex flex-col justify-center p-3"
                    >
                        <p className="desc text-sm relative font-medium text-left px-4">
                            {experience.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceCard;