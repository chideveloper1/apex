"use client";

import { useState } from "react";

interface Withdrawal {
  id: string;
  name: string;
  amount: string;
  paymentMethod: string;
  status: "Pending" | "Completed" | "Failed" | "Processing";
  date: string;
}

export default function WithdrawalSummary({ withdrawal }: { withdrawal: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredWithdrawals = withdrawal.filter(
    (withdrawal: any) =>
      withdrawal.user.username
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      withdrawal.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className=" mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">
          Withdrawal
        </h2>
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
                    NAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    AMOUNT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    PAYMENT METHOD
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredWithdrawals.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-24 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <svg
                          className="w-12 h-12 mb-4 text-gray-500"
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
                  filteredWithdrawals.map((withdrawal: any) => (
                    <tr
                      key={withdrawal.id}
                      className="hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                        {withdrawal.user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {withdrawal.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {withdrawal.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            withdrawal.status === "COMPLETE"
                              ? "bg-green-900/50 text-green-300 border border-green-700/50"
                              : withdrawal.status === "PENDING"
                              ? "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50"
                              : withdrawal.status === "PROCESSING"
                              ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                              : "bg-red-900/50 text-red-300 border border-red-700/50"
                          }`}
                        >
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {withdrawal.date}
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
              Showing {filteredWithdrawals.length === 0 ? 0 : 1} to{" "}
              {filteredWithdrawals.length} of {filteredWithdrawals.length}{" "}
              entries
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={true}
                className="px-3 py-1 border border-gray-600 rounded-md text-sm text-gray-500 bg-gray-800 cursor-not-allowed"
              >
                Previous
              </button>
              <button
                disabled={true}
                className="px-3 py-1 border border-gray-600 rounded-md text-sm text-gray-500 bg-gray-800 cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
