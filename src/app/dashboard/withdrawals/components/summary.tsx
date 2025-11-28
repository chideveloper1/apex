"use client";

import { useState } from "react";

export default function WithdrawalSummary({
  withdrawal,
}: {
  withdrawal: any[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredWithdrawals = withdrawal.filter(
    (w) =>
      w.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 sm:p-6 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Withdrawal
        </h2>

        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {/* Controls */}
          <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <span className="text-gray-300 text-sm">Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-gray-300 text-sm">entries</span>
            </div>

            <div className="w-full sm:w-64 relative">
              <input
                type="text"
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-10 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
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

          {/* MOBILE CARD VIEW */}
          <div className="block sm:hidden">
            {filteredWithdrawals.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                <p className="text-lg mb-2">No data to show</p>
                <p className="text-sm">No withdrawals available</p>
              </div>
            ) : (
              filteredWithdrawals.map((w) => (
                <div
                  key={w.id}
                  className="border-b border-slate-700 p-4 space-y-2"
                >
                  <div className="text-white font-semibold">
                    {w.user.username}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Amount: {w.amount}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Method: {w.paymentMethod}
                  </div>
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-full text-white ${
                        w.status === "Completed"
                          ? "bg-green-600"
                          : w.status === "Pending"
                          ? "bg-yellow-600"
                          : w.status === "Processing"
                          ? "bg-blue-600"
                          : "bg-red-600"
                      }`}
                    >
                      {w.status}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs">{w.date}</div>
                </div>
              ))
            )}
          </div>

          {/* DESKTOP TABLE VIEW */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700">
                  {["NAME", "AMOUNT", "PAYMENT METHOD", "STATUS", "DATE"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredWithdrawals.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-24 text-center text-gray-400"
                    >
                      No data available
                    </td>
                  </tr>
                ) : (
                  filteredWithdrawals.map((w) => (
                    <tr
                      key={w.id}
                      className="hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-medium">
                        {w.user.username}
                      </td>
                      <td className="px-6 py-4 text-gray-300">{w.amount}</td>
                      <td className="px-6 py-4 text-gray-300">
                        {w.paymentMethod}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs text-white ${
                            w.status === "Completed"
                              ? "bg-green-600"
                              : w.status === "Pending"
                              ? "bg-yellow-600"
                              : w.status === "Processing"
                              ? "bg-blue-600"
                              : "bg-red-600"
                          }`}
                        >
                          {w.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{w.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-4 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              Showing {filteredWithdrawals.length === 0 ? 0 : 1} to{" "}
              {filteredWithdrawals.length} of {filteredWithdrawals.length}{" "}
              entries
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-slate-700 text-gray-400 cursor-not-allowed text-sm">
                Previous
              </button>
              <button className="px-3 py-1 rounded bg-slate-700 text-gray-400 cursor-not-allowed text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
