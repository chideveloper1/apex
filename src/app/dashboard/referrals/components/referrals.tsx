"use client";

import { useState } from "react";

interface Referral {
  id: string;
  fullName: string;
  creationDate: string;
}

export default function Referrals({ user }: { user: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const referralLink = `https://apextradesfunding.com/register?ref=${user.username}`;

  // Mock data - replace with your actual data
  const referrals: Referral[] = [];

  const filteredReferrals = referrals.filter((referral) =>
    referral.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // You can add a toast notification here
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-200 mb-6">
            Referrals
          </h1>

          {/* Referral Link Section */}
          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-200 mb-3">
              My Referral Link
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex-1 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3">
                <code className="text-blue-400 text-sm break-all">
                  {referralLink}
                </code>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
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
                Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Referrals Table Section */}
        <div className="bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden">
          {/* Controls */}
          <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border border-gray-600 rounded-md px-3 py-1 text-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-400">entries</span>
            </div>

            <div className="w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800/50 border-b border-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    REFERRAL USER'S FULLNAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    CREATION DATE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredReferrals.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="px-6 py-24 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <svg
                          className="w-16 h-16 mb-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p className="text-lg font-medium mb-2 text-gray-300">
                          No data to show
                        </p>
                        <p className="text-sm">No data available in table</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredReferrals.map((referral) => (
                    <tr
                      key={referral.id}
                      className="hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                        {referral.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {referral.creationDate}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              Showing {filteredReferrals.length === 0 ? 0 : 1} to{" "}
              {filteredReferrals.length} of {filteredReferrals.length} entries
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={true}
                className="px-4 py-2 border border-gray-600 rounded-md text-sm text-gray-500 bg-gray-800 cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                disabled={true}
                className="px-4 py-2 border border-gray-600 rounded-md text-sm text-gray-500 bg-gray-800 cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Referral Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-200">
                Earn Rewards
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Get commission for every friend who joins through your referral
              link and starts trading.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-200">
                Share Easily
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Share your unique link on social media, with friends, or through
              your network.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-200">
                Track Progress
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Monitor your referrals and earnings in real-time through your
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
