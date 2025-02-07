"use client";

// Import Statements
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Github, Linkedin, Instagram, Earth, BookHeart, Trophy, DollarSign, Building, School, Globe } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Experiences } from "@/components/Experiences";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import ExperienceCard from "@/components/ExperienceCard";
import { ArrowLeft, ArrowRight, X, ChartNoAxesColumnIncreasing } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Projects } from "@/components/Projects";
import Tilt from "react-parallax-tilt";

export default function() {
    const [selectedProject, setSelectedProject] = useState(false);
    return (
        <div>
            {/* HOME */}
            <section id = "home" className = "bg-[#0D1224] min-h-screen flex flex-col items-center justify-center px-6">
                <div className = "flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
                    <div className = "text-white max-w-lg">
                        <p className = "text-lg mb-2"> hello, i am </p>
                        <h1 className = "text-4xl md:text-5xl font-bold text-red-500 mb-3"> faheem kamel </h1>
                        <p className = "text-lg mt-2 font-medium"> an aspiring software developer or cybersecurity analyst. </p>
                        <div className = "mt-6 flex space-x-4 gap-2">
                            <a
                                href = "/assets/faheem_kamel_resume.pdf"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                {/* MY RESUME BUTTON */}
                                <Button className = "bg-red-500 text-white px-6 py-3 rounded-[15px] font-semibold transition-transform duration-300 transform hover:scale-125">
                                    my resume
                                </Button>
                            </a>
                            {/* ADD LINK TO CONTACT ME PAGE */}
                            <Button variant = "outline" className = "border-red-500 text-red-500 px-6 py-3 rounded-[15px] font-semibold transition-transform duration-300 transform hover:scale-125">
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
                        <div className = "relatove w-48 h-48 md:w-96 md:h-96">
                            <Image
                                src = "/assets/profile-pic-1.jpg"
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
                            className = "text-xl hover:text-red-500 hover:scale-125"
                        >
                            <Github size = {24} />
                        </a>
                        {/* LINKEDIN */}
                        <a
                            href = "https://linkedin.com/in/faheemkamel/"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-xl hover:text-red-500 hover:scale-125"
                        >
                            <Linkedin size = {24} />
                        </a>
                        {/* INSTAGRAM */}
                        <a
                            href = "https://instagram.com/f4heemmmm"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-xl hover:text-red-500 hover:scale-125"
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
                            className = "text-xl hover:text-red-500 hover:scale-125"
                        >
                            <Github size = {24} />
                        </a>
                        {/* LINKEDIN */}
                        <a
                            href = "https://linkedin.com/in/faheemkamel/"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-xl hover:text-red-500 hover:scale-125"
                        >
                            <Linkedin size = {24} />
                        </a>
                        {/* INSTAGRAM */}
                        <a
                            href = "https://instagram.com/f4heemmmm"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-xl hover:text-red-500 hover:scale-125"
                        >
                            <Instagram size = {24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT ME */}
            <section id = "about" className = "relative min-h-screen bg-gray-300 flex flex-col">
                <div className = "relative w-full h-[35vh] md:h-[45vh]">
                    <Image
                        src = "/assets/about-me.jpg"
                        alt = "background"
                        layout = "fill"
                        objectFit = "cover"
                        className = "object-cover opacity-90"
                    />
                    <div className = "absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <h2 className = "text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase text-center px-4 mt-5">
                            WHO AM I?
                        </h2>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className = "relative z-20 bg-white py-10 px-6 md:py-12 md:px-8 mt-[-60px] md:mt-[-80px] shadow-lg max-w-5xl mx-auto text-gray-900 rounded-[5px] w-[90%] md:w-[80%]">
                    <p className = "text-sm leading-relaxed">
                        Hello everyone! I am <span className = "font-semibold">Faheem Kamel </span>, an undergraduate studying {" "}
                        <span className = "font-semibold">Computer Science</span> at{" "}
                        <span className = "font-semibold">Singapore Management University</span>. I am majoring in{" "}
                        <span className = "font-semibold">Cybersecurity</span> as well.
                    </p>
                    <br />
                    <p className = "text-sm leading-relaxed">
                        I started coding when I was in junior college, as I took computing as one of my A-level subjects.
                        Honestly, it didn't start out well for me—I failed every exam, flung every test, and it felt like I
                        made a bad decision taking computing as a subject for a major exam. I even failed my prelim exams, which
                        was exactly a month before the A-levels practical exam paper.
                    </p>
                    <br />
                    <p className = "text-sm leading-relaxed">
                        I then decided to take a step back and <span className="font-semibold">re-learnt everything from scratch</span>.
                        For a month straight, I spent at least <span className="font-semibold">three hours coding daily</span>, trying out
                        different questions given by my school, sourcing for external questions such as{" "}
                        <span className="font-semibold">Project Euler</span>, and getting as much help as I could from my peers.
                        Instead of taking everything wholesale, I broke down the topics into different segments and studied them
                        slowly. I converted the content into a way I could understand. This led me to achieving an{" "}
                        <span className="font-semibold">8-grade jump</span>! So here I am, furthering my education in a field I
                        started out struggling with. Now, I have worked on several projects, including{" "}
                        <span className="font-semibold">this portfolio website</span>.
                    </p>
                    <br />
                    <p className = "text-sm leading-relaxed">
                        Some of my interests are <span className="font-semibold">sports</span>, particularly{" "}
                        <span className = "font-semibold">soccer</span> and <span className="font-semibold">floorball</span>.
                        Professionally, I play floorball. I've been in my school's{" "}
                        <span className = "font-semibold">varsity floorball team since 2024</span>, and I also play externally for a
                        club called <span className = "font-semibold">Woodlands CSC Skyhawks</span>. I enjoy{" "}
                        <span className = "font-semibold">travelling</span>, having already visited{" "}
                        <span className = "font-semibold">18 countries</span> (Malaysia, Indonesia, Thailand, United Kingdom,
                        Switzerland, Morocco, Turkey, Greece, Santorini, New Zealand, Australia, Japan, Korea, Dubai, Spain,
                        Italy, Rome, Saudi Arabia, United Arab Emirates, France, and Brunei). I almost visited{" "}
                        <span className="font-semibold">Vatican City</span> as I was on the bridge connecting it.
                    </p>
                </div>
            </section>
            {/* EXPERIENCE */}
            <section id = "experience" className = "py-12 bg-white">
                <div className = "max-w-6xl mx-auto px-6">
                    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Experiences.map((exp, index) => (
                            <ExperienceCard key = {index} experience = {exp} index = {index} />
                        ))}
                    </div>
                </div>
            </section>
        {/* PROJECTS */}
        <section id = "projects" className = "min-h-screen relative w-full px-6 sm:px-12 py-16">
            <h2 className = "text-4xl font-semibold text-center"> projects </h2>
            <p className = " text-center text-gray-600 mt-2 max-w-lg mx-auto">
                take a look at the projects i have embarked on
            </p>
            {/* PROJECT CAROUSEL */}
            <div className = "relative mt-8">
                <Swiper
                    modules = {[Navigation]}
                    navigation = {{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween = {30}
                    slidesPerView = {1}
                    breakpoints = {{
                        480: { slidesPerView: 1.2, spaceBetween: 20 },
                        640: { slidesPerView: 1.5, spaceBetween: 25 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    centeredSlides = {true}
                    className = "flex items-center justify-center"
                >
                    {Projects.map((project, i) => (
                        <SwiperSlide key = {i} className = "flex justify-center">
                            {/* TILT EFFECT */}
                            <Tilt
                                tiltMaxAngleX = {15}
                                tiltMaxAngleY = {15}
                                perspective = {1000}
                                scale = {0.9}
                                transitionSpeed = {500}
                                className = "w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] mx-auto rounded-[12px] overflow-hidden shadow-lg cursor-pointer"
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
                                {selectedProject.fullDescription.map((point, index) => (
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
        </section>
        {/* SKILLS */}
        </div>
    );
};