"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("vn"); // default Vietnamese
  const router = useRouter();

  const toggleLanguage = () => {
    if (language === "vn") {
      setLanguage("en");
      router.push("/en");
    } else {
      setLanguage("vn");
      router.push("/");
    }
  };

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
              {language == "vn" ? "Hai Doan Bảo hiểm" : "Hai Doan Insurance"}
            </h1>
            <p className="text-sm text-gray-600 font-medium -mt-1">
              {language === "vn" ? "Bảo hiểm Mỹ giá cả phải chăng" : "Affordable American Insurance"}
            </p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-[var(--primary)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&#10005;</span> // ✕ close
          ) : (
            <span className="text-3xl">&#9776;</span> // ☰ hamburger
          )}
        </button>
      </div>

      {/* Links + Language Switch */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-3 sm:mt-0 w-full sm:w-auto transition-all ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <a
          href="#contact"
          className="mt-3 sm:mt-0 text-gray-700 font-semibold text-lg hover:text-[var(--secondary)] transition-colors text-center"
        >
          {language == "vn" ? "Liên hệ" : "Contact"}
        </a>

        {/* Language Toggle Switch */}
        <div className="mt-3 sm:mt-0 flex justify-center items-center">
          <div
            onClick={toggleLanguage}
            className="relative w-20 h-10 bg-gray-200 rounded-full cursor-pointer transition-colors duration-300 flex items-center p-1"
          >
            {/* Sliding circle */}
            <div
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                language === "en" ? "translate-x-10" : "translate-x-0"
              }`}
            />
            {/* Labels */}
            <span
              className={`absolute left-2 text-xs font-semibold transition-opacity duration-300 ${
                language === "vn" ? "opacity-100" : "opacity-50"
              }`}
            >
              VN
            </span>
            <span
              className={`absolute right-2 text-xs font-semibold transition-opacity duration-300 ${
                language === "en" ? "opacity-100" : "opacity-50"
              }`}
            >
              EN
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
