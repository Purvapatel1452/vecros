"use client";

import Link from "next/link";
import { useState } from "react";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 shadow-lg z-50 border-b border-gray-800 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
        <img src="/logo.svg" alt="Vecros Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        <span className="text-white text-xl sm:text-2xl font-bold tracking-wider">VECROS</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-white font-medium text-base">
        <li><Link href="/landing1" className="hover:text-[#0070F3] transition-colors duration-200">Home</Link></li>
        <li><Link href="/landing2" className="hover:text-[#0070F3] transition-colors duration-200">Envision</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col text-white font-medium text-base">
          <li className="border-b border-gray-800">
            <Link 
              href="/landing1" 
              className="block px-4 sm:px-6 lg:px-8 py-4 hover:bg-gray-900 hover:text-[#0070F3] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/landing2" 
              className="block px-4 sm:px-6 lg:px-8 py-4 hover:bg-gray-900 hover:text-[#0070F3] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
             Envision
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}