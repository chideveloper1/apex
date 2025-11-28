"use client";

import { useState } from "react";
import DepositModal from "./deposit";
import WithdrawModal from "./withdraw";

export default function WalletBalance({ wallet }: { wallet: any }) {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  console.log("wallet", wallet);

  return (
    <>
      <div className=" rounded-xl border border-slate-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-slate-400 mb-2">
              Total Balance
            </h2>
            <div className="text-3xl font-bold text-white">$0.00</div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:col-span-2">
            <button
              onClick={() => setIsDepositModalOpen(true)}
              className="flex-1 bg-[#0D26FF] hover:bg-[#0a1ecc] text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
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
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
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

        {/* Additional Balance Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-slate-700">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-1">Available</div>
            <div className="text-white font-semibold">$0.00</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-1">In Trade</div>
            <div className="text-white font-semibold">$0.00</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-1">Pending</div>
            <div className="text-white font-semibold">$0.00</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-1">Bonus</div>
            <div className="text-white font-semibold">$0.00</div>
          </div>
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
