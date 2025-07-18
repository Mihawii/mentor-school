"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SchoolCrest from "./SchoolCrest";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
  { name: "For Parents", href: "/parents" },
  { name: "For Students", href: "/students" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-[#074B70] text-white shadow z-50 fixed top-0 left-0 transition-all duration-300">
      <nav
        className={`flex items-center justify-between w-full max-w-7xl mx-auto px-8 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={`flex items-center gap-2 font-bold whitespace-nowrap transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}
          style={{ letterSpacing: "0.02em" }}
        >
          <div className={`bg-white rounded-full border-2 border-[#C2B280] shadow flex items-center justify-center transition-all duration-300 ${scrolled ? 'w-8 h-8 p-0.5' : 'w-10 h-10 p-1'} mr-2`}>
            <Image src="/logo/logo.png" alt="Mentor-school logo" width={scrolled ? 32 : 36} height={scrolled ? 32 : 36} className="object-contain w-full h-full" />
          </div>
          Mentor-school
        </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row gap-6 md:gap-10 items-start md:items-center absolute md:static top-0 left-0 h-screen md:h-auto w-64 md:w-auto bg-[#074B70] px-8 pt-24 md:pt-0 transition-transform duration-300 z-40 ${
              menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base md:text-lg font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                tabIndex={0}
                aria-label={link.name}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 