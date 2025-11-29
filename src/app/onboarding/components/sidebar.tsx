"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-3 rounded-lg"
        onClick={() => setMobileOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-slate-800 border-r border-slate-700 flex flex-col
          w-64 transform md:translate-x-0 transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center p-6 mb-10">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={70} height={200} />
          </Link>
        </div>

        {/* Menu placeholder (add links if needed) */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link
            href="/onboarding/step1"
            className="block p-3 rounded-lg text-slate-300 hover:bg-slate-700"
          >
            Step 1
          </Link>
          <Link
            href="/onboarding/step2"
            className="block p-3 rounded-lg text-slate-300 hover:bg-slate-700"
          >
            Step 2
          </Link>
          <Link
            href="/onboarding/step3"
            className="block p-3 rounded-lg text-slate-300 hover:bg-slate-700"
          >
            Step 3
          </Link>
        </nav>

        {/* Logout */}
        <button
          onClick={() => signOut()}
          className="flex items-center justify-center space-x-2 w-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 py-3 px-4 rounded-lg transition-all duration-200 font-medium mb-6 mx-4"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}
