// Import Statements
import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsList } from "../ProjectsList";
import { X, ChartNoAxesColumnIncreasing, Globe, Mouse, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination, EffectCoverflow, Keyboard, Autoplay } from "swiper/modules";
// Import Swiper core and required types
import type { Swiper as SwiperType } from 'swiper';

function Projects() {
    type selectedProject = {
        title: string;
        description: string;
        image: string;
        fullDescription: string[];
        website?: string;
        tags?: string[];
    };
    
    const [selectedProject, setSelectedProject] = useState<selectedProject | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    
    // Create a ref to store the Swiper instance
    const swiperRef = useRef<SwiperType | null>(null);
    
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedProject) {
                // Close modal on Escape key
                if (e.key === 'Escape') {
                    setSelectedProject(null);
                }
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject]);

    // Custom navigation controls using the ref
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    
    // Toggle autoplay using the ref
    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
        if (swiperRef.current) {
            if (isAutoplay) {
                swiperRef.current.autoplay.stop();
            } else {
                swiperRef.current.autoplay.start();
            }
        }
    };

    return (
        <div className="relative mt-12 max-w-screen-xl mx-auto px-4">
            {/* Project counter indicators */}
            <div className="text-center mb-6 text-gray-500">
                <p className="font-mono">
                    {activeIndex + 1} / {ProjectsList.length}
                </p>
            </div>
            
            <div className="relative">
                {/* Custom navigation buttons */}
                <button 
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 hover:scale-110 lg:-translate-x-8"
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button 
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 hover:scale-110 lg:translate-x-8"
                    aria-label="Next project"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
                
                <Swiper
                    modules={[Navigation, Mousewheel, Pagination, EffectCoverflow, Keyboard, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={isAutoplay ? {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    } : false}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 },
                        1280: { slidesPerView: 3 },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    mousewheel={{ forceToAxis: true }}
                    className="projects-swiper px-4 py-8"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {ProjectsList.map((project, i) => (
                        <SwiperSlide key={i} className="flex justify-center py-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Tilt
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    perspective={1000}
                                    scale={1}
                                    transitionSpeed={500}
                                    glareEnable={true}
                                    glareMaxOpacity={0.2}
                                    glareBorderRadius="12px"
                                    className="w-[clamp(14rem,25vw,22rem)] h-[clamp(22rem,34vw,32rem)] mx-auto rounded-[12px] overflow-hidden shadow-lg cursor-pointer group"
                                >
                                    <div
                                        className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                                            <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                                            
                
                                            
                                            <button className="mt-3 text-sm py-2 px-4 bg-white/20 hover:bg-white/30 text-white rounded-full self-start transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Autoplay toggle */}
                <button 
                    onClick={toggleAutoplay} 
                    className="absolute bottom-0 right-0 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 mr-4 mb-4"
                    aria-label={isAutoplay ? "Pause autoplay" : "Start autoplay"}
                >
                    {isAutoplay ? (
                        <span className="block w-3 h-3 bg-gray-800 rounded-sm"></span>
                    ) : (
                        <ChevronRight className="w-3 h-3" />
                    )}
                </button>
            </div>
            
            {/* POPUP MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center p-6 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            // Close modal when clicking on backdrop
                            if (e.target === e.currentTarget) {
                                setSelectedProject(null);
                            }
                        }}
                    >
                        <motion.div 
                            className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:w-4/5 md:w-3/5 max-w-lg md:max-w-2xl relative max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-black bg-gray-100 p-2 rounded-full transition hover:scale-110"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                            
                            {/* Project image at the top of modal */}
                            <div 
                                className="w-full h-48 md:h-64 rounded-xl mb-6 bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${selectedProject.image})`,
                                }}
                            />
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                {selectedProject.title}
                            </h3>
                            
                            {/* Tags */}
                            {selectedProject.tags && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            <div className="w-20 h-1 bg-gray-600 mb-6 rounded-full" />
                            
                            <ul className="list-none space-y-4 text-gray-800 text-sm leading-relaxed">
                                {selectedProject.fullDescription.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ChartNoAxesColumnIncreasing className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {selectedProject.website && selectedProject.website !== "" && (
                                <div className="mt-8 flex justify-center">
                                    <a
                                        href={selectedProject.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 font-semibold transition"
                                    >
                                        <Globe className="w-4 h-4" />
                                        <span>Visit Project</span>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Projects;