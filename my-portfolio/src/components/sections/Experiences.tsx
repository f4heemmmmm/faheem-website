// Import Statement
import React, { useState, useEffect } from "react";
import ExperienceCard from "../ExperienceCard";
import { ExperiencesList } from "../ExperiencesList";

function Experiences() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {Array.from({ length: ExperiencesList.length }).map((_, index) => (
                        <div 
                            key={index}
                            className="w-full aspect-square bg-gray-300 animate-pulse shadow-lg rounded-lg"
                            role="status"
                            aria-label="Loading experience card"
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section 
            id="experiences-section"
            className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 items-center justify-center"
            aria-label="Professional experiences section"
        >
            {/* Grid container with improved responsive spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {ExperiencesList.map((exp, index) => (
                    <div
                        key={`${exp.title}-${index}`}
                        className="transform transition-transform duration-200 hover:scale-[1.02] focus-within:scale-[1.02]"
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                    >
                        <ExperienceCard 
                            experience={exp} 
                            index={index}
                        />
                    </div>
                ))}
            </div>

            {/* Custom CSS for animations and scrollbar */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }

                /* Firefox scrollbar */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
                }

                /* Focus styles for better accessibility */
                .focus\\:ring-2:focus {
                    ring-width: 2px;
                }

                /* Screen reader only content */
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }
            `}</style>
        </section>
    );
}

export default Experiences;