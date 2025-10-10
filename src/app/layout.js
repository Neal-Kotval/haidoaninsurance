import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

import { siteInfo } from "../app/data/siteInfo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: `Hai Doan Financial - ${siteInfo.descriptionVN}`,
  description: siteInfo.descriptionVN,
  openGraph: {
    title: `Hai Doan Financial - ${siteInfo.descriptionVN}`,
    description: siteInfo.descriptionVN,
    url: siteInfo.url,
    images: [{ url: siteInfo.logo, width: 600, height: 600, alt: siteInfo.name }],
  },
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
      </body>
    </html>
  );
}
