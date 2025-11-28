"use client";

import { useState } from "react";

export default function AccountSettings({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState<
    "general" | "password" | "notifications"
  >("general");

  const userData = user;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-200 mb-6">
            Account Settings
          </h1>

          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("general")}
              className={`pb-4 px-1 border-b-2 transition-colors font-medium ${
                activeTab === "general"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`pb-4 px-1 border-b-2 transition-colors font-medium ${
                activeTab === "password"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Password
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`pb-4 px-1 border-b-2 transition-colors font-medium ${
                activeTab === "notifications"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Notifications
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "general" && (
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-4">
                General
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-400 text-sm">
                  Your data helps get a much better experience using our
                  website.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Your Name */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Your name</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 font-medium">
                    {userData.username}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Referral Code */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">
                  Referral Code
                </h3>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex-1 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <code className="text-blue-400 text-sm break-all">
                      https://apextradesfunding.com/register?ref=$
                      {userData.username}
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(userData.referralCode)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Phone */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Phone</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300">{userData.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Email</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300">{userData.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Gender */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Gender</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 capitalize">{userData.gender}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Address</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300">{userData.address}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <hr className="border-gray-700" />
            </div>

            {/* Country */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium text-gray-200">Country</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300">{userData.country}</p>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end pt-6">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {activeTab === "password" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">
              Change Password
            </h2>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 max-w-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">
              Notification Settings
            </h2>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 max-w-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">
                      Email Notifications
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Receive updates via email
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">
                      SMS Notifications
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Receive updates via SMS
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">
                      Trade Alerts
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get notified about trade opportunities
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
