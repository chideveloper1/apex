"use client";

import { useState } from "react";

interface Transaction {
  id: number;
  name: string;
  amount: string;
  paymentMethod: string;
  status: string;
  date: string;
}

export default function TransactionsTable({ deposit }: { deposit: any }) {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalEntries = deposit.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Transactions
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 text-sm">Show</span>
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0D26FF]"
          >
            <option value={10}>10 entries</option>
            <option value={25}>25 entries</option>
            <option value={50}>50 entries</option>
            <option value={100}>100 entries</option>
          </select>
        </div>
      </div>

      {/* Table / List */}
      <div className="space-y-3">
        {deposit.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-slate-500 mb-3">
              <svg
                className="w-16 h-16 mx-auto"
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
            </div>
            <p className="text-slate-400 text-lg font-medium">
              No transactions found
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Your transaction history will appear here
            </p>
          </div>
        ) : (
          deposit
            .slice(
              (currentPage - 1) * entriesPerPage,
              currentPage * entriesPerPage
            )
            .map((tx: any) => (
              <div
                key={tx.id}
                className="bg-slate-700 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <span className="text-white font-medium">
                    {tx.user.username}
                  </span>
                  <span className="text-green-400 font-semibold">
                    {tx.amount}
                  </span>
                  <span className="text-slate-300 text-sm">
                    {tx.paymentMethod}
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end space-x-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      tx.status === "COMPLETE"
                        ? "bg-green-900/50 text-green-300 border border-green-700/50"
                        : tx.status === "PENDING"
                        ? "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50"
                        : tx.status === "PROCESSING"
                        ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                        : "bg-red-900/50 text-red-300 border border-red-700/50"
                    }`}
                  >
                    {tx.status}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {tx.createdAt.toDateString()}
                  </span>
                </div>
              </div>
            ))
        )}
      </div>

      {/* Footer / Pagination */}
      {deposit.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 space-y-2 sm:space-y-0">
          <div className="text-slate-400 text-sm">
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </div>
          <div className="flex items-center space-x-2 flex-wrap">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-300 rounded text-sm transition-colors"
            >
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(totalEntries / entriesPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-[#0D26FF] text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(totalEntries / entriesPerPage))
                )
              }
              disabled={
                currentPage === Math.ceil(totalEntries / entriesPerPage)
              }
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-300 rounded text-sm transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors">
          Export CSV
        </button>
        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors">
          Print
        </button>
        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors">
          Filter
        </button>
      </div>
    </div>
  );
}
