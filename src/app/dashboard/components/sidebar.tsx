// src/components/DashboardSidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊",
  },
  {
    name: "Investment",
    href: "/dashboard/investment",
    icon: "📈",
    children: [
      {
        name: "New Investment",
        href: "/dashboard/investment",
        icon: "💹",
      },
      {
        name: "Investments Summary",
        href: "/dashboard/investment/summary",
        icon: "🏦",
      },
    ],
  },
  {
    name: " CopyTrading",
    href: "/dashboard/trading",
    icon: "🎯",
    children: [
      {
        name: "Copy Trading",
        href: "/dashboard/trading",
        icon: "💸",
      },
      {
        name: "Total Trading Amount",
        href: "/dashboard/trading/subscribe",
        icon: "📊",
      },
      {
        name: "Trading portfolio",
        href: "/dashboard/trading/portfolio",
        icon: "⚡",
      },
    ],
  },
  {
    name: "Withdrawals",
    href: "/dashboard/withdrawals",
    icon: "🏧",
    children: [
      {
        name: "Withdrawal",
        href: "/dashboard/withdrawals",
        icon: "💳",
      },
      {
        name: "Withdrawal Summary",
        href: "/dashboard/withdrawals/summary",
        icon: "🕒",
      },
    ],
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: "💵",
  },
  {
    name: "Referrals",
    href: "/dashboard/referrals",
    icon: "👥",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: "⚙️",
  },
  {
    name: "KYC application",
    href: "/dashboard/",
    icon: "⚙️",
  },
  // {
  //   name: "Support",
  //   href: "/mailto:support@apextradesfunding.com",
  //   icon: "💬",
  // },
];

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  const isItemActive = (item: MenuItem): boolean => {
    if (pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => pathname === child.href);
    }
    return false;
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = isItemActive(item);
    const isExpanded = expandedItems.includes(item.name);

    return (
      <div key={item.name}>
        <div
          className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-slate-300 hover:bg-slate-700"
          } ${level > 0 ? "ml-4" : ""}`}
          onClick={() => hasChildren && toggleItem(item.name)}
        >
          <Link
            href={hasChildren ? "#" : item.href}
            className="flex items-center space-x-3 flex-1"
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                toggleItem(item.name);
              }
            }}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span className="font-medium">{item.name}</span>}
          </Link>

          {hasChildren && !isCollapsed && (
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>

        {/* Dropdown Children */}
        {hasChildren && isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {item?.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center px-8 pt-6 rounded-lg mb-10">
        <Link href="/" className="">
          <Image src="/logo.png" alt="Logo" width={70} height={200} />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item) => renderMenuItem(item))}
      </nav>

      <div className="border-t border-slate-700 p-4 flex-shrink-0"></div>

      <button
        onClick={() => signOut()}
        className="flex items-center justify-center space-x-2 mx-4 mb-8 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 py-3 px-4 rounded-lg transition-all duration-200 font-medium group"
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
