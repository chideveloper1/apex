"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ToasterProvider from "@/components/toasterProvider";
import MainLayout from "@/components/mainLayout";
import { useEffect } from "react";
import Tawk from "@/components/tawk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Your App Name",
//   description: "Your app description",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    fetch("/api/log-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: window.location.pathname,
      }),
    });
  }, []);
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"
          strategy="afterInteractive"
        />
      </head>
      <MainLayout>{children}</MainLayout>
      <Tawk />
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="top-4 left-4 z-1 pt-4 pl-4">
          <LanguageSwitcher />
        </div>
        {children}
        <ToasterProvider />
      </body> */}
    </html>
  );
}
