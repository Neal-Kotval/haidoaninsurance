import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#fafafa] border-b border-[var(--primary)] shadow-sm px-10 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Left Section - Logo + Title */}
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

      {/* Tagline + Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 mt-3 sm:mt-0">
        <p className="text-gray-600 text-sm sm:text-base text-center">
          Auto • Home • Life • Business • Commercial
        </p>
        <a
          href="#contact"
          className="mt-3 sm:mt-0 text-gray-700 font-semibold text-lg hover:text-[var(--secondary)] transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
