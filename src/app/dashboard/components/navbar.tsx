"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import SimpleBalanceBadge from "./balance";

export default function DashboardNav({ wallet }: { wallet: any }) {
  const [notifications] = useState(3);
  const pathname = usePathname();

  const getPageTitle = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    if (pathSegments.length === 1) return "Dashboard";

    const currentPage = pathSegments[pathSegments.length - 1];
    return currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Left: Page Title */}
        <div className="flex-1 min-w-[150px]">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            {getPageTitle()}
          </h1>
          <p className="text-gray-400 text-sm hidden sm:block">
            Welcome to your trading dashboard
          </p>
        </div>

        {/* Right Side: Turn into mobile stacked */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Balance (visible on mobile now) */}
          <div>
            <SimpleBalanceBadge balance={wallet?.balance} />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5 5v-5zM10.24 8.56a5.97 5.97 0 01-3.77-4.19M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* User Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Username (hidden on extra small screens) */}
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">
                {wallet?.user?.username}
              </p>
              <p className="text-xs text-gray-400">Premium Trader</p>
            </div>

            {/* Avatar */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {wallet?.user?.username?.charAt(0)?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
