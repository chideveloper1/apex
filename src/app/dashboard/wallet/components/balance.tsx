"use client";

import { useState } from "react";
import DepositModal from "./deposit";
import WithdrawModal from "./withdraw";

export default function WalletBalance({ wallet }: { wallet: any }) {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-slate-700 p-4 sm:p-6 bg-slate-900 overflow-hidden">
        {/* Top Section: Total Balance */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-lg font-semibold text-slate-400 mb-1">
              Total Balance
            </h2>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              $0.00
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap md:flex-nowrap md:justify-end w-full md:w-auto">
            <button
              onClick={() => setIsDepositModalOpen(true)}
              className="flex-1 min-w-0 bg-[#0D26FF] hover:bg-[#0a1ecc] text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Deposit</span>
            </button>
            <button
              onClick={() => setIsWithdrawModalOpen(true)}
              className="flex-1 min-w-0 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
              <span>Withdraw</span>
            </button>
          </div>
        </div>

        {/* Balance Breakdown */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 sm:pt-6 border-t border-slate-700 text-center">
          {[
            { label: "Available", value: "$0.00" },
            { label: "In Trade", value: "$0.00" },
            { label: "Pending", value: "$0.00" },
            { label: "Bonus", value: "$0.00" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-slate-400 text-sm mb-1">{item.label}</div>
              <div className="text-white font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        wallet={wallet}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
      />
    </>
  );
}
