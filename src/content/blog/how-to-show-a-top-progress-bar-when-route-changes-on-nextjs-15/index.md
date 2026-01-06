---
title: "How to Show a Top Progress Bar When Route Changes on Next.js 15"
description: "Have you ever noticed the thin red progress bar at the top of YouTube when you navigate between pages? Many SPAs use a top progress bar to indicate page transitions and improve user experience. In this guide, you'll learn how to implement a similar top progress bar in Next.js 15."
date: "February 24 2025"
---

# How to Show a Top Progress Bar When Route Changes in Next.js 15

  Have you ever noticed the thin red progress bar at the top of YouTube when you navigate between pages? Many SPAs use a top progress bar to indicate page transitions and improve user experience. In this guide, you'll learn how to implement a similar top progress bar in Next.js 15.

  ## Overview

  The idea is to create a small client-side component that listens for route changes, animates a progress width from 0 → 60 → 100, and then hides the bar once navigation is complete. Render this component high in your layout (before the main content) so it appears fixed at the top of every page.

  ## 1) Create a Next.js Project

  If you haven't already, scaffold a new Next.js project (TypeScript is recommended). Use the official `create-next-app` CLI and follow the Next.js Getting Started docs to configure TypeScript, ESLint, and any other options you prefer.

  Reference: Getting Started: Installation | Next.js (nextjs.org)

  ## 2) Create a Loader Component

  - Add a new component file (e.g., components/Loader.tsx or .jsx).
  ```javascript
  "use client"; //makes the component client so we can use hooks 

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Loader = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setProgress(60);
    setHidden(false);

    const timer = setTimeout(() => {
      setProgress(100);

      setTimeout(() => {
        setHidden(true);
        setProgress(0);
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`h-[2px] bg-goldDark fixed top-0 left-0 transition-all duration-300 ${
        hidden ? "opacity-0 w-0" : "opacity-100 w-full z-[70]"
      }`}
      style={{
        width: `${progress}%`,
        transition: progress === 100 ? "none" : "width 0.3s ease-in-out",
      }}
    />
  );
};

export default Loader;
  ```

  ## 3) Render the Loader in Root Layout

  ```javascript
    import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader"; //import the component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvarbek | Welcome!",
  description: "Ilyosov Sarvarbek, web and mobile app developer. (Personal Blog)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}
      >
        <Loader/> {/*Render it before everything*/}
        <Header/>
        {children}
      </body>
    </html>
  );
}
  ```

  ## Styling Tips

  - Use a small height (1–3px) to mimic the subtle progress bars seen on major sites.
  - Choose a striking color that contrasts with your layout (e.g., gold, red, or accent color).
  - Combine width transitions and opacity transitions for smooth appearance/disappearance.
  - If not using Tailwind, create a small CSS class with fixed positioning, height, background-color, and transition rules.

  ## Why This Helps UX

  A top progress bar gives users immediate visual feedback that a route change is happening, reducing perceived latency and making navigation feel faster and more polished.

  ## Conclusion

  By creating a lightweight client-side Loader component, listening for route changes, and animating a thin bar at the top of the page, you can replicate the familiar YouTube/GitHub style progress indicator in Next.js 15. It's a small addition that significantly improves perceived performance during navigation.

  If you found this helpful, consider sharing the approach or adapting timings and styles to match your site's design. Happy coding! 🚀