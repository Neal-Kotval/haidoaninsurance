"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fafafa] border-b border-[var(--primary)] shadow-sm px-6 sm:px-10 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Left Section - Logo + Title */}
      <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Hai Doan Financial Logo"
            width={200}
            height={200}
            priority
          />
          <div>
            <h1 className="text-2xl font-extrabold text-[var(--primary)] tracking-wide">
              Hai Doan Financial
            </h1>
            <p className="text-sm text-gray-600 font-medium -mt-1">
              Affordable American Insurance
            </p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-[var(--primary)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&#10005;</span> // ✕ close icon
          ) : (
            <span className="text-3xl">&#9776;</span> // ☰ hamburger icon
          )}
        </button>
      </div>

      {/* Links */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center sm:space-x-12 mt-3 sm:mt-0 w-full sm:w-auto transition-all ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <a
          href="#contact"
          className="mt-3 sm:mt-0 text-gray-700 font-semibold text-lg hover:text-[var(--secondary)] transition-colors text-center"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
