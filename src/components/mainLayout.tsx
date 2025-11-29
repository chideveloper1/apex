"use client";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import LanguageSwitcher from "./LanguageSwitcher";
import ToasterProvider from "./toasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="top left-4 z-1 p-1">
        <LanguageSwitcher />
      </div>
      {children}
      <ToasterProvider />
    </div>
  );
}
