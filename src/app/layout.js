import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Hai Doan Financial",
  description: "Insurance and financial services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
    <head>
      <link
        rel="icon"
        href="/favicon.svg"
        type="image/svg+xml"
      />
    </head>
      <body
        className={`${inter.variable} font-sans flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Navbar />
        
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
