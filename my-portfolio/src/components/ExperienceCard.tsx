// Import Statements
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle clicks outside card to close on mobile
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobile && hovered && cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setHovered(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [hovered, isMobile]);

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setHovered(!hovered);
        } else if (event.key === 'Escape' && hovered) {
            setHovered(false);
        }
    };

    // Handle touch events for mobile
    const handleTouchStart = (event: React.TouchEvent) => {
        if (isMobile) {
            event.preventDefault();
            setHovered(!hovered);
        }
    };

    // Preload image
    useEffect(() => {
        if (experience.image && index !== 0) {
            const img = new Image();
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageError(true);
            img.src = experience.image;
        }
    }, [experience.image, index]);

    // My Experience Title Card
    if (index === 0) {
        return (
            <div 
                className="relative w-full aspect-square bg-black text-white flex items-center justify-center shadow-lg p-6" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                role="heading"
                aria-level={2}
            >
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-center leading-tight"> 
                    my <br /> experiences. 
                </h3>
            </div>
        );
    }

    return (
        <div
            ref={cardRef}
            className="relative w-full aspect-square cursor-pointer overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-shadow duration-200"
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
            onClick={() => isMobile && setHovered(!hovered)}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-expanded={hovered}
            aria-label={`${experience.title} - Click to ${hovered ? 'hide' : 'show'} details`}
        >
            <AnimatePresence mode="wait">
                {!hovered ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-black text-white flex items-center justify-center p-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {/* Image with loading states */}
                        {experience.image && !imageError && (
                            <>
                                {!imageLoaded && (
                                    <div className="absolute inset-0 w-full h-full bg-gray-700 animate-pulse flex items-center justify-center">
                                        <div className="text-gray-400 text-sm">Loading...</div>
                                    </div>
                                )}
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 ${
                                        imageLoaded ? 'opacity-80' : 'opacity-0'
                                    }`}
                                    loading="lazy"
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageError(true)}
                                />
                            </>
                        )}
                        
                        {/* Fallback for missing/error images */}
                        {(!experience.image || imageError) && (
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                        )}

                        <div className="flex flex-col gap-2 sm:gap-4 z-10 text-center px-2">
                            <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-medium leading-tight"> 
                                {experience.title} 
                            </h3>
                            <h4 className="relative text-lg sm:text-xl font-bold italic opacity-90"> 
                                {experience.date} 
                            </h4>
                        </div>
                        
                        {/* Mobile hint indicator */}
                        {isMobile && (
                            <div className="absolute bottom-2 right-2 text-white/60 text-xs bg-black/30 px-2 py-1 rounded">
                                Tap for details
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-[#444444] text-white flex items-center justify-center p-4 sm:p-6"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <p className="text-sm sm:text-base md:text-lg font-medium text-center leading-relaxed max-h-full overflow-y-auto custom-scrollbar px-2">
                                {experience.description}
                            </p>
                            
                           
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading overlay for image loading */}
            {!imageLoaded && experience.image && !imageError && index !== 0 && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            )}
        </div>
    );
}

export default ExperienceCard;