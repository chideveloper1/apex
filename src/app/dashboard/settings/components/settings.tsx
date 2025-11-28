"use client";

import { useState } from "react";

export default function AccountSettings({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState<
    "general" | "password" | "notifications"
  >("general");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-0 sm:p-6 max-w-full">
      <div className="max-w-full sm:max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-semibold text-gray-200 mb-4 sm:mb-6">
            Account Settings
          </h1>

          {/* Tabs */}
          <div className="flex space-x-4 sm:space-x-8 border-b border-gray-700 overflow-x-auto">
            {["general", "password", "notifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-2 sm:pb-4 px-2 border-b-2 transition-colors font-medium flex-shrink-0 ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "general" && (
          <div className="space-y-6 sm:space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-2 sm:mb-4">
                General
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 border border-gray-700">
                <p className="text-gray-400 text-sm">
                  Your data helps get a much better experience using our
                  website.
                </p>
              </div>
            </div>

            {/* Fields */}
            {[
              { label: "Your Name", value: user.username },
              {
                label: "Referral Code",
                value: `https://apextradesfunding.com/register?ref=${user.username}`,
                code: user.referralCode,
                isReferral: true,
              },
              { label: "Phone", value: user.phone },
              { label: "Email", value: user.email },
              { label: "Gender", value: user.gender },
              { label: "Address", value: user.address },
              { label: "Country", value: user.country },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2 sm:space-y-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 items-start w-full">
                  <h3 className="text-lg font-medium text-gray-200">
                    {item.label}
                  </h3>

                  {item.isReferral ? (
                    <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4">
                      <div className="flex-1 bg-gray-800/30 rounded-lg p-3 border border-gray-700 break-all w-full">
                        <code className="text-blue-400 text-sm break-all">
                          {item.value}
                        </code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.code)}
                        className="w-full sm:w-auto px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  ) : (
                    <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700 w-full">
                      <p className="text-gray-300 capitalize">{item.value}</p>
                    </div>
                  )}
                </div>
                {idx < 6 && <hr className="border-gray-700" />}
              </div>
            ))}

            {/* Edit Button */}
            <div className="flex justify-end pt-4 sm:pt-6">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {activeTab === "password" && (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-4 sm:mb-6">
              Change Password
            </h2>

            <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700 w-full max-w-full">
              {["Current Password", "New Password", "Confirm New Password"].map(
                (label, idx) => (
                  <div key={idx} className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {label}
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Enter ${label.toLowerCase()}`}
                    />
                  </div>
                )
              )}

              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                Update Password
              </button>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-4 sm:mb-6">
              Notification Settings
            </h2>

            <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700 w-full max-w-full space-y-4 sm:space-y-6">
              {[
                {
                  label: "Email Notifications",
                  desc: "Receive updates via email",
                  checked: true,
                },
                {
                  label: "SMS Notifications",
                  desc: "Receive updates via SMS",
                  checked: false,
                },
                {
                  label: "Trade Alerts",
                  desc: "Get notified about trade opportunities",
                  checked: true,
                },
              ].map((notif, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4"
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">
                      {notif.label}
                    </h3>
                    <p className="text-gray-400 text-sm">{notif.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={notif.checked}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}

              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
