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
  { name: "Dashboard", href: "/dashboard", icon: "📊" },

  {
    name: "Investment",
    href: "/dashboard/investment",
    icon: "📈",
    children: [
      { name: "New Investment", href: "/dashboard/investment", icon: "💹" },
      {
        name: "Investments Summary",
        href: "/dashboard/investment/summary",
        icon: "🏦",
      },
    ],
  },

  {
    name: "CopyTrading",
    href: "/dashboard/trading",
    icon: "🎯",
    children: [
      { name: "Copy Trading", href: "/dashboard/trading", icon: "💸" },
      {
        name: "Total Trading Amount",
        href: "/dashboard/trading/subscribe",
        icon: "📊",
      },
      {
        name: "Trading Portfolio",
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
      { name: "Withdrawal", href: "/dashboard/withdrawals", icon: "💳" },
      {
        name: "Withdrawal Summary",
        href: "/dashboard/withdrawals/summary",
        icon: "🕒",
      },
    ],
  },

  { name: "Wallet", href: "/dashboard/wallet", icon: "💵" },
  { name: "Referrals", href: "/dashboard/referrals", icon: "👥" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
  { name: "KYC application", href: "/dashboard", icon: "🪪" },
];

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((i) => i !== itemName)
        : [...prev, itemName]
    );
  };

  const isItemActive = (item: MenuItem): boolean => {
    if (pathname === item.href) return true;
    if (item.children?.some((child) => pathname === child.href)) return true;
    return false;
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children?.length;
    const isExpanded = expandedItems.includes(item.name);
    const isActive = isItemActive(item);

    return (
      <div key={item.name}>
        {/* Parent item */}
        <div
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition
            ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-700"
            }
            ${level > 0 ? "ml-4" : ""}
          `}
          onClick={() => hasChildren && toggleItem(item.name)}
        >
          <Link
            href={hasChildren ? "#" : item.href}
            className="flex items-center flex-1 space-x-3"
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                toggleItem(item.name);
              } else {
                setMobileOpen(false);
              }
            }}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </Link>

          {hasChildren && !isCollapsed && (
            <svg
              className={`w-4 h-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>

        {/* Dropdown children */}
        {hasChildren && isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Button */}
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
          fixed md:static top-0 left-0 h-full z-50
          bg-slate-800 border-r border-slate-700 flex flex-col
          transition-all duration-300
          ${isCollapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex justify-center py-6 mb-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={isCollapsed ? 40 : 80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>

        {/* Logout */}
        <button
          onClick={() => signOut()}
          className="mx-4 mb-8 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 py-3 px-4 rounded-lg flex justify-center transition font-medium"
        >
          Logout
        </button>
      </div>
    </>
  );
}
