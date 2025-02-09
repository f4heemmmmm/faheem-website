// Import Statements
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ProjectsList } from "../ProjectsList";
import { X, ChartNoAxesColumnIncreasing, Globe } from "lucide-react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";


// Swiper Imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Projects() {
    type selectedProject = {
        title: string;
        description: string;
        image: string;
        fullDescription: string[];
        website?: string;
      };
    const [selectedProject, setSelectedProject] = useState<selectedProject | null>(null);
    return (
        <div className = "relative mt-20 max-w-screen-xl mx-auto px-4">
            <Swiper
                modules = {[Navigation]}
                navigation = {{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween = {75}
                slidesPerView = {1}
                breakpoints = {{
                    480: { slidesPerView: 1, spaceBetween: 15 },
                    640: { slidesPerView: 1.5, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                    1280: { slidesPerView: 3.5, spaceBetween: 75 },
                }}

                centeredSlides = {true}
                className = "flex items-center justify-center"
            >
            {ProjectsList.map((project, i) => (
                <SwiperSlide key = {i} className = "flex justify-center">
                    {/* TILT EFFECT */}
                    <Tilt
                        tiltMaxAngleX = {15}
                        tiltMaxAngleY = {15}
                        perspective = {1000}
                        scale = {0.9}
                        transitionSpeed = {500}
                        className = "w-[clamp(14rem,25vw,22rem)] h-[clamp(22rem,34vw,32rem)] mx-auto rounded-[12px] overflow-hidden shadow-lg cursor-pointer"
                        >
                        <div
                            className = "relative w-full h-full"
                            style = {{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick = {() => setSelectedProject(project)}
                        >
                            <div className = "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                <h3 className = "text-white text-lg font-semibold">{project.title}</h3>
                                <p className = "text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </div>
                    </Tilt>
                </SwiperSlide>
            ))}
        </Swiper>
        <button className = "swiper-button-prev" />
        <button className = "swiper-button-next" />
        {/* POPUP MODAL */}
        {selectedProject && (
            <div className = "fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center p-6 z-50">
                <div className = "bg-white/80 p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:w-4/5 md:w-3/5 max-w-lg md:max-w-2xl relative max-h-[90vh] overflow-y-auto">
                    <button
                        className = "absolute top-4 right-4 text-gray-600 hover:text-black bg-gray-100 p-2 rounded-full transition hover:scale-110"
                        onClick = {() => setSelectedProject(null)}
                    >
                        <X className = "w-5 h-5" />
                    </button>
                    <h3 className = "text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
                        {selectedProject.title}
                    </h3>
                    <div className = "w-20 h-1 bg-gray-600 mx-auto mb-4 rounded-full" />
                    <ul className = "list-none space-y-3 text-gray-800 text-sm leading-relaxed">
                        {selectedProject.fullDescription.map((point: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                            <li key = {index} className = "flex items-center gap-2">
                                <ChartNoAxesColumnIncreasing className = "w-4 h-4 text-gray-600 flex-shrink-0" />
                                <span> {point} </span>
                            </li>
                        ))}
                    </ul>
                    {selectedProject.website && selectedProject.website !== "" && (
                        <div className = "mt-6 flex justify-center">
                            <a
                                href = {selectedProject.website}
                                target = "_blank"
                                rel = "noopener noreferrer"
                                className = "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition justify-center"
                            >
                                <Globe className = "w-4 h-4" />
                                <span className = "text-sm"> Visit {selectedProject.title} </span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
    )
}

export default Projects;