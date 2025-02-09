"use-client";

// Import Statements
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -60;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    };

    return (
        // CHANGE BACKGROUND COLOR FOR NAVBAR
        <header className = "fixed top-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md">
            <div className = "container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                <Link href = "/" className = "text-xl font-bold tracking-wide"> {"</ faheem's portfolio >"} </Link>
                {/* DESKTOP VIEW */}
                <nav className = "hidden md:flex gap-8 text-md font-semibold">
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}> home </button>
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => scrollToSection("about")}> about me </button>
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => scrollToSection("experiences")}> experiences </button>
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => scrollToSection("projects")}> projects </button>
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => scrollToSection("skills")}> skills </button>
                    {/*
                        CHANGE CONTACT PAGE TO A NEW PAGE INSTEAD OF SECTION
                    */}
                    <button className = "nav-link text-white hover:text-white focus:ring-0" onClick = {() => scrollToSection("contact")}> contact me! </button>
                </nav>
                {/* MOBILE VIEW: HAMBURGER MENU */}
                <button className = "md:hidden p-2" onClick = {() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen
                        ? <X className = "w-7 h-7" />
                        : <Menu className = "w-7 h-7" />
                    }
                </button>
            </div>
            {/* MOBILE VIEW */}
            {isMenuOpen && (
                <div className = "absolute top-16 right-0 w-3/4 bg-gray-900 text-white text-center py-5 flex flex-col gap-4 text-lg font-medium md:hidden border-t border-gray-700 mt-3">
                    <Link href = "#" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> home </Link>
                    <Link href = "#about" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> about me </Link>
                    <Link href = "#experiences" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> my experiences </Link>
                    <Link href = "#projects" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> my projects </Link>
                    <Link href = "#skills" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> skills </Link>
                    {/*
                            CHANGE CONTACT PAGE TO A NEW PAGE INSTEAD OF SECTION
                    */}
                    <Link href = "#contact" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> contact me! </Link>
                </div>
            )}
        </header>
    );
};

export default NavigationBar;