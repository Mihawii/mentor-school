"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/#academics" },
  { name: "News", href: "/#news" },
  { name: "Parents", href: "/parents" },
  { name: "Students", href: "/students" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-white/95 backdrop-blur-md py-5 border-b border-gray-100'}`}>
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3 z-[60] group relative shrink-0">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm p-1">
            <Image src="/logo/logo.png" alt="Mentor-school logo" width={40} height={40} className="object-contain w-full h-full" />
          </div>
          <span className="font-playfair font-bold text-xl md:text-2xl tracking-tight text-[#074B70] whitespace-nowrap hidden sm:block">
            Mentor-school
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-semibold text-[#074B70] uppercase tracking-wider hover:text-[#C2B280] transition-colors whitespace-nowrap">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/admissions" className="bg-[#074B70] text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-[#053652] transition-colors whitespace-nowrap shadow-md ml-4">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#074B70] z-[60] relative p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="text-2xl font-playfair font-bold text-[#074B70]">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/admissions" onClick={() => setMenuOpen(false)} className="bg-[#074B70] text-white px-10 py-4 rounded text-lg font-bold shadow-md mt-6 inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;