import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, Calculator, Shield, Plane, Camera, Trophy, Terminal } from "lucide-react";
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

interface TravelImage {
  src: string;
  alt: string;
}

interface CollageImage {
  src: string;
  alt: string;
  className: string;
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
    
  
    // Interests with modern styling
    const interests = [
        { name: "Soccer", icon: <Trophy className="w-4 h-4" />, color: "bg-red-100 text-red-800 border-red-200" },
        { name: "Floorball", icon: <Trophy className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
        { name: "Travel", icon: <Plane className="w-4 h-4" />, color: "bg-teal-100 text-teal-800 border-teal-200" },
        { name: "Photography", icon: <Camera className="w-4 h-4" />, color: "bg-pink-100 text-pink-800 border-pink-200" },
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

    // Enhanced collage images with multiple overlay options
    const collageImages: CollageImage[] = [
        { 
            src: "/assets/images/pic-1.JPG", 
            alt: "Main profile photo",
            className: "col-span-2 row-span-2 rounded-2xl"
        },
        { 
            src: "/assets/images/pic-2.JPG", 
            alt: "Sports action shot",
            className: "col-span-1 row-span-2 rounded-xl"
        },
        { 
            src: "/assets/images/pic-3.JPG", 
            alt: "Travel landscape",
            className: "col-span-3 row-span-2 rounded-xl"
        },
        { 
            src: "/assets/images/pic-4.JPG", 
            alt: "Coding workspace",
            className: "col-span-1 row-span-3 rounded-xl"
        },
        { 
            src: "/assets/images/pic-5.JPG", 
            alt: "Group photo with friends",
            className: "col-span-2 row-span-3 rounded-xl"
        }
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

    // Collage animation variants
    const collageItemVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8,
            y: 30
        },
        visible: (index: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.6 + index * 0.08,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className={`${inter.className} min-h-screen bg-gray-50 w-full`}>
            <div className="w-full px-10 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
                    
                    {/* Left Content Section */}
                    <div 
                        ref={containerRef}

                        className="space-y-12"
                    >
                        {/* Main Heading with Orange Accent */}
                        <div className="relative">
                            <div className="absolute -top-4 left-0 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                            <h1 

                                className={`${dmSans.className} text-8xl sm:text-9xl font-semibold text-gray-900 leading-tight`}
                            >
                                SO WHO AM I...
                            </h1>
                        </div>

                        {/* Intro Statement */}
                        <div

                            className="space-y-8"
                        >
                            <h2 className={`${dmSans.className} text-3xl font-semibold text-gray-900`}>
                                I am Faheem Kamel, a student at Singapore Management University, studying Computer Science with a major in Cybersecurity.
                           </h2>
                        
                        </div>

                        {/* Skills Section */}
                        <div

                            className="space-y-4"
                        >
     
                        </div>

                        {/* Journey Section */}
                        <div
 
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <h3 className={`${dmSans.className} text-2xl font-semibold text-gray-900 mb-5`}>My Journey</h3>
                            <div className={`${dmSans.className} space-y-6 text-gray-800 text-xl leading-relaxed`}>
                                <p> My coding journey started in Junior College when I took Computing as an A-Level subject. Initially, I found myself struggling - I could barely wrap my head around the concepts and ended up failing almost every test, quiz, and exam for two whole years </p> 
                                <p>I knew I had to find a different way to learn. So I took matters into my own hands and dedicated three hours every day to practicing code and going back to the basics. I broke down my teachers' lessons and rebuilt them in a way that actually made sense to me.                               </p>
                                <p> When my A-Level results came out, I saw a <span className="font-semibold text-green-600">5-grade improvement</span> for my Computing exam. That breakthrough gave me the confidence to keep pushing forward, and it's what brought me to where I am today. </p>

                                
                            </div>
                        </div>

                        {/* Mathematics Passion */}
                        <div

                            className="p-6 rounded-2xl border border-blue-100"
                        >
                            <h3 className={`${dmSans.className} text-2xl font-semibold text-gray-900 mb-5`}>Passion for Mathematics</h3>
                            <p className={`${dmSans.className} text-gray-800 text-xl leading-relaxed`}>
                                I have an intense appreciation for Mathematics, a love instilled by my Secondary School teacher and nurtured by my JC Mathematics teacher. I find beauty in the logic and structure of Mathematics — a universal language of patterns that helps decode the world around us.
                            </p>
                        </div>

                        {/* Sports Section */}
                        <div

                            className="space-y-4"
                        >
                            <h3 className={`${dmSans.className} text-2xl font-semibold text-gray-900 mb-5`}>Sports</h3>
                            <p className={`${dmSans.className} text-gray-800 text-xl leading-relaxed`}>
                                Beyond academics, I'm passionate about Soccer (Manchester United fan) and Floorball. Started with Field Hockey in Secondary School before transitioning to Floorball in Junior College. Currently play for my University team and Woodlands CSC Skyhawks club.
                            </p>
                        </div>

                        {/* Travel & Photography */}
                        <div
                            className="space-y-6"
                        >
                            <div>
                            <h3 className={`${dmSans.className} text-2xl font-semibold text-gray-900 mb-5`}>Travel and Photography</h3>
                            <p className={`${dmSans.className} text-gray-800 text-xl leading-relaxed`}>
                                    I've explored 18 countries, immersing myself in diverse cultures and cuisines. Photography allows me to capture and share these experiences.
                                </p>
                                
                               
                            </div>
                            
                            {/* Photo Gallery with Enhanced Color Harmonization */}
                            <div className="overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {showGallery && (
                                        <div 
                                            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6"
                                        >
                                            {travelImages.map((img, index) => (
                                                <div
                                                    key={index}
                                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300"
                                                >
                                                    {/* Enhanced Color Overlay Options */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-orange-500/20 mix-blend-overlay group-hover:opacity-80 opacity-60 transition-opacity duration-300 z-10"></div>
                                                    
                                                    {/* Subtle darkening overlay */}
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 z-20"></div>
                                                    
                                                    <div className="relative h-full w-full">
                                                        <Image
                                                            src={img.src}
                                                            alt={img.alt}
                                                            width={300}
                                                            height={300}
                                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 filter saturate-90 contrast-110"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Interests Section */}
                        <div
                            className="space-y-4"
                        >
                            <h3 className={`${dmSans.className} text-xl font-semibold text-gray-900`}>Interests</h3>
                            <div className="flex flex-wrap gap-3">
                                {interests.map((interest, index) => (
                                    <div
                                        key={index}
                                        className={`${interest.color} px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border transition-all duration-200 hover:shadow-md hover:scale-105`}
                                    >
                                        {interest.icon}
                                        <span>{interest.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image Collage Section - Enhanced with Color Harmonization */}
                    <div 
                        className="relative"
                    >
                        <div className="relative">
                            {/* Enhanced Image Collage Grid with Multiple Overlay Options */}
                            <div className="grid grid-cols-3 grid-rows-6 gap-4 h-[1200px] lg:h-[1300px]">
                                {collageImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`${img.className} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative`}
                                    >
                                        {/* Method 1: Subtle Color Wash Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/30 via-blue-50/20 to-orange-50/30 mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                                        
                                        {/* Method 2: Monochromatic Overlay (uncomment to use instead) */}
                                        {/* <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-10"></div> */}
                                        
                                        {/* Method 3: Warm/Cool Tone Overlay (uncomment to use instead) */}
                                        {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/30 to-blue-200/30 mix-blend-soft-light opacity-50 group-hover:opacity-70 transition-opacity duration-300 z-10"></div> */}
                                        
                                        {/* Hover Enhancement */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                                        
                                        {/* Image with Enhanced Filters */}
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-75 contrast-105 brightness-95"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;