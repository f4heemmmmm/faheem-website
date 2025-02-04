"use-client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className = "bg-gray-800 text-white">
            <div className = "container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                <Link href = "/" className = "text-xl font-bold tracking-wide">
                    faheem's portfolio
                </Link>
                {/* DESKTOP VIEW */}
                <nav className = "hidden md:flex gap-8 text-md font-semibold">
                    <Link href = "/" className = "nav-link"> home </Link>
                    <Link href = "/about" className = "nav-link"> about me </Link>
                    <Link href = "/work" className = "nav-link"> experience </Link>
                    <Link href = "/skills" className = "nav-link"> skills </Link>
                    <Link href = "/contact" className = "nav-link"> contact me! </Link>
                </nav>
                {/* HAMBURGER MENU FOR SMALL SCREEN */}
                <button className = "md:hidden p-2" onClick = {() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className = "w-7 h-7" /> : <Menu className = "w-7 h-7" />}
                </button>
            </div>
            {/* MOBILE MENU VIEW */}
            {isMenuOpen && (
                <div className = "absolute top-16 right-0 w-1/4 bg-gray-900 text-white text-center py-5 flex flex-col gap-4 text-lg font-medium md:hidden border-t border-gray-700 mt-3">
                    <Link href = "/" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> home </Link>
                    <Link href = "/about" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> about me </Link>
                    <Link href = "/work" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> experience </Link>
                    <Link href = "/skills" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> skills </Link>
                    <Link href = "/contact" className = "nav-link py-2 ml-4" onClick = {() => setIsMenuOpen(false)}> contact me! </Link>
                </div>
            )}
        </header>
    );
};