import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giovany Sievert | Senior Full-Stack Developer",
  description:
    "Portfolio of Giovany Sievert — Senior Full-Stack Developer with 6+ years building web and mobile products with React Native, React, Node.js, TypeScript, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased dark:bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
