"use client";

import { useState } from "react";

interface Trade {
  id: string;
  name: string;
  status: "Active" | "Pending" | "Completed" | "Cancelled";
  channelName: string;
  amountInvested: string;
  stopLoss: string;
  date: string;
}

export default function SubscribedTrades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Mock data
  const trades: Trade[] = [];

  const filteredTrades = trades.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.channelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-slate-900">
      <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-md">
        {/* HEADER */}
        <div className="px-4 sm:px-6 py-4 border-b border-slate-700">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Subscribed Trades
          </h1>
        </div>

        {/* CONTROLS */}
        <div className="px-4 sm:px-6 py-4 border-b border-slate-700 flex flex-col sm:flex-row justify-between gap-4">
          {/* Entries selector */}
          <div className="flex items-center gap-3">
            <span className="text-gray-300 text-sm">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-gray-300 text-sm">entries</span>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded px-10 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-300"
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
          {filteredTrades.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              <p className="text-lg mb-2">No data to show</p>
              <p className="text-sm">No subscribed trades available</p>
            </div>
          ) : (
            filteredTrades.map((trade) => (
              <div
                key={trade.id}
                className="border-b border-slate-700 p-4 space-y-2"
              >
                <div className="text-white font-semibold">{trade.name}</div>

                <div className="text-gray-300 text-sm">
                  Channel: {trade.channelName}
                </div>

                <div className="text-gray-300 text-sm">
                  Amount: {trade.amountInvested}
                </div>

                <div className="text-gray-300 text-sm">
                  Stop Loss: {trade.stopLoss}%
                </div>

                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full text-white ${
                    trade.status === "Active"
                      ? "bg-green-600"
                      : trade.status === "Pending"
                      ? "bg-yellow-600"
                      : trade.status === "Completed"
                      ? "bg-blue-600"
                      : "bg-red-600"
                  }`}
                >
                  {trade.status}
                </span>

                <div className="text-gray-400 text-xs">{trade.date}</div>
              </div>
            ))
          )}
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                {[
                  "NAME",
                  "STATUS",
                  "CHANNEL NAME",
                  "AMOUNT",
                  "STOP LOSS (%)",
                  "DATE",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-700">
              {filteredTrades.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-24 text-center text-gray-400"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                filteredTrades.map((trade) => (
                  <tr key={trade.id} className="hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-white font-medium">
                      {trade.name}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs text-white ${
                          trade.status === "Active"
                            ? "bg-green-600"
                            : trade.status === "Pending"
                            ? "bg-yellow-600"
                            : trade.status === "Completed"
                            ? "bg-blue-600"
                            : "bg-red-600"
                        }`}
                      >
                        {trade.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {trade.channelName}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {trade.amountInvested}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {trade.stopLoss}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{trade.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="px-4 sm:px-6 py-4 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            Showing {filteredTrades.length === 0 ? 0 : 1} to{" "}
            {filteredTrades.length} of {filteredTrades.length} entries
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
  );
}
