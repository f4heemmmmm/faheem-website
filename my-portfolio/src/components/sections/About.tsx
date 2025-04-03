import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, Calculator, Shield, Plane, Camera, Trophy, Terminal } from "lucide-react";

interface TravelImage {
  src: string;
  alt: string;
}

function About() {
    // Intersection observer for animations
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    
    // Parallax scrolling effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Toggle for travel gallery
    const [showGallery, setShowGallery] = useState<boolean>(false);
    
    // Skills with animations
    const skills = [
        { name: "Programming", icon: <Terminal className="w-4 h-4" />, color: "bg-teal-800" },
        { name: "Mathematics", icon: <Calculator className="w-4 h-4" />, color: "bg-slate-700" },
        { name: "Problem Solving", icon: <Code className="w-4 h-4" />, color: "bg-zinc-800" },
        { name: "Cybersecurity", icon: <Shield className="w-4 h-4" />, color: "bg-emerald-900" },
    ];
    
    // Interests with animations
    const interests = [
        { name: "Soccer", icon: <Trophy className="w-4 h-4" />, color: "bg-slate-700" },
        { name: "Floorball", icon: <Trophy className="w-4 h-4" />, color: "bg-zinc-800" },
        { name: "Travel", icon: <Plane className="w-4 h-4" />, color: "bg-teal-800" },
        { name: "Photography", icon: <Camera className="w-4 h-4" />, color: "bg-emerald-900" },
    ];
    
    // Sample travel images
    const travelImages: TravelImage[] = [
        { src: "/assets/images/travel1.JPG", alt: "Travel photo 1" },
        { src: "/assets/images/travel2.JPG", alt: "Travel photo 2" },
        { src: "/assets/images/travel3.JPG", alt: "Travel photo 3" },
        { src: "/assets/images/travel4.JPG", alt: "Travel photo 4" },
        { src: "/assets/images/travel5.JPG", alt: "Travel photo 5" },
        { src: "/assets/images/travel6.JPG", alt: "Travel photo 6" },
    ];

    // Gallery animation variants
    const containerVariants = {
        hidden: { 
            opacity: 0,
            height: 0
        },
        visible: { 
            opacity: 1,
            height: "auto",
            transition: {
                opacity: { duration: 0.4 },
                height: { duration: 0.5, ease: "easeInOut" },
                staggerChildren: 0.08
            }
        },
        exit: { 
            opacity: 0,
            height: 0,
            transition: {
                opacity: { duration: 0.3 },
                height: { duration: 0.4, ease: "easeInOut" }
            }
        }
    };

    const imageVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        visible: { 
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-zinc-900 shadow-xl rounded-[15px] p-6 md:p-8 w-full md:w-4/5 lg:w-3/5 mx-auto my-10 text-gray-300"
        >
            {/* Introduction section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
            >
                <h2 className="text-xl font-mono text-teal-400 mb-4">$ whoami</h2>
                <p className="text-base text-gray-300 leading-relaxed">
                    I am <span className="font-mono text-teal-400">Faheem Kamel</span>, studying 
                    <span className="font-mono text-emerald-400"> Computer Science </span> at 
                    <span className="font-mono text-teal-400"> Singapore Management University</span> with a major in 
                    <span className="font-mono text-emerald-400"> Cybersecurity</span>.
                </p>
            </motion.div>
            
            {/* Skills section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
            >
                <h3 className="text-md font-mono text-emerald-400 mb-3">$ skills</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            className={`${skill.color} text-gray-200 px-3 py-1 rounded flex items-center gap-1 text-sm border border-transparent hover:border-teal-500 transition-colors`}
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
            {/* Journey section with minimal design */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8 bg-zinc-800 p-5 rounded border-l-2 border-teal-600"
            >
                <h3 className="text-md font-mono text-teal-400 mb-3">$ journey</h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    My coding journey began in Junior College with Computing at GCE A-Levels. Initially struggled with Python syntax and OOP concepts.
                </p>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    After a complete reset, I dedicated three hours daily to coding practice.
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                    This dedication led to a <span className="font-mono text-emerald-400">5-grade improvement</span> in one month, paving the way to where I am now.
                </p>
            </motion.div>
            
            {/* Mathematics section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-8 bg-zinc-800 p-5 rounded border-l-2 border-emerald-600"
            >
                <h3 className="text-md font-mono text-emerald-400 mb-3">$ passion</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                   I have an intense appreciation for Mathematics, a love instilled by my Secondary School teacher and nurtured by my JC Mathematics teacher. I find beauty in the logic and structure of Mathematics — a universal language of patterns that helps decode the world around us.
                </p>
            </motion.div>
            
            {/* Sports section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-8"
            >
                <h3 className="text-md font-mono text-teal-400 mb-3">$ sports</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                    Beyond academics, I'm passionate about Soccer (Manchester United fan) and Floorball. Started with Field Hockey in Secondary School before transitioning to Floorball in Junior College. Currently play for my University team and Woodlands CSC Skyhawks club.
                </p>
            </motion.div>
            
            {/* Travel & Photography with improved gallery animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-8"
            >
                <h3 className="text-md font-mono text-emerald-400 mb-3">$ travel</h3>
                <p className="text-base text-gray-300 leading-relaxed mb-4">
                    I've explored 18 countries, immersing myself in diverse cultures and cuisines. Photography allows me to capture and share these experiences.
                </p>
                
                {/* Photo Gallery Button */}
                <button 
                    onClick={() => setShowGallery(!showGallery)}
                    className="px-3 py-1 bg-teal-900 text-gray-200 rounded-[15px] border border-teal-700 hover:bg-teal-800 transition-colors text-sm font-mono mb-4 focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                    {showGallery ? "$ hide_gallery" : "$ show_gallery"}
                </button>
                
                {/* Improved Photo Gallery with smoother animation */}
                <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                        {showGallery && (
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid grid-cols-2 md:grid-cols-3 gap-2"
                            >
                                {travelImages.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        variants={imageVariants}
                                        className="relative aspect-square rounded overflow-hidden cursor-pointer group"
                                    >
                                        <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={300}
                                                height={300}
                                                className="object-cover w-full h-full hover:scale-105 hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
            
            {/* Interests section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                <h3 className="text-md font-mono text-teal-400 mb-3">$ interests</h3>
                <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                            className={`${interest.color} text-gray-200 px-3 py-1 rounded flex items-center gap-1 text-sm border border-transparent hover:border-emerald-500 transition-colors`}
                        >
                            {interest.icon}
                            <span>{interest.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
            {/* Terminal-like footer */}
            <div className="mt-10 pt-4 border-t border-zinc-700 text-gray-400 text-xs font-mono">
                $ connect -with "faheem.kamel"_
            </div>
        </motion.div>
    );
};

export default About;