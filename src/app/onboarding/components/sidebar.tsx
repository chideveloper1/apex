// src/components/DashboardSidebar.tsx
"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingSidebar() {
  return (
    <div className="w-64 shadow-lg border-r border-gray-200 h-screen flex flex-col p-6">
      {/* Sidebar content would go here */}
      <div className="flex items-center p-4 rounded-lg mb-10">
        <Link href="/" className="">
          <Image src="/logo.png" alt="Logo" width={70} height={200} />
        </Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => signOut()}
        className="flex items-center justify-center space-x-2 w-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 py-3 px-4 rounded-lg transition-all duration-200 font-medium group"
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
  );
}
