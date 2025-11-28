"use client";

import { useState } from "react";

interface SimpleBalanceBadgeProps {
  balance?: number;
  currency?: string;
}

export default function SimpleBalanceBadge({
  balance = 0,
  currency = "USD",
}: SimpleBalanceBadgeProps) {
  const [isVisible, setIsVisible] = useState(true);

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const displayBalance = isVisible ? formatBalance(balance) : "•••••";

  return (
    <div className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer group">
      {/* Wallet Icon */}
      <svg
        className="w-4 h-4 text-green-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>

      {/* Balance Amount */}
      <div
        className="flex items-center space-x-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        <span
          className={`text-sm font-semibold ${
            isVisible ? "text-white" : "text-slate-300"
          }`}
        >
          {displayBalance}
        </span>

        {/* Currency */}
        <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {currency}
        </span>
      </div>
    </div>
  );
}
