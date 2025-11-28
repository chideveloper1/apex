// src/components/WithdrawModal.tsx
"use client";

import { useState } from "react";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState("btc");
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const withdrawalMethods = [
    {
      id: "btc",
      name: "Bitcoin - BTC",
      icon: "₿",
      minimum: "0.001 BTC",
      networkFee: "0.00015 BTC",
    },
    {
      id: "eth",
      name: "Ethereum - ETH",
      icon: "Ξ",
      minimum: "0.01 ETH",
      networkFee: "0.003 ETH",
    },
    {
      id: "usdt",
      name: "Tether - USDT",
      icon: "USDT",
      minimum: "0.1 USDT",
      networkFee: "0.000005 USDT",
    },
  ];

  const selectedMethod = withdrawalMethods.find(
    (method) => method.id === withdrawalMethod
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawalAddress) {
      alert("Please enter your withdrawal address");
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    onClose();
    setAmount("");
    setWithdrawalAddress("");
  };

  const calculateTotal = () => {
    if (!amount) return 0;
    const networkFee = parseFloat(
      selectedMethod?.networkFee.split(" ")[0] || "0"
    );
    return parseFloat(amount) - networkFee;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Withdraw Funds</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Available Balance */}
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <div className="text-slate-400 text-sm mb-1">Available Balance</div>
            <div className="text-2xl font-bold text-white">
              0.00 {selectedMethod?.name.split(" - ")[1]}
            </div>
          </div>

          {/* Amount Section */}
          <div className="text-center">
            <div className="mb-2">
              <span className="text-slate-400 text-lg">I want to withdraw</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent text-4xl font-bold text-white text-center placeholder-slate-500 focus:outline-none border-none"
                required
                min="0.001"
                step="0.001"
              />
            </div>
            <p className="text-slate-500 text-sm mt-2">
              Minimum withdrawal: {selectedMethod?.minimum}
            </p>
          </div>

          {/* Withdrawal Method */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Select Withdrawal Method
            </label>
            <select
              value={withdrawalMethod}
              onChange={(e) => setWithdrawalMethod(e.target.value)}
              className="w-full bg-slate-800 border-2 border-slate-600 rounded-xl p-4 text-white text-lg font-medium focus:outline-none focus:border-[#0D26FF] transition-all appearance-none"
            >
              {withdrawalMethods.map((method) => (
                <option
                  key={method.id}
                  value={method.id}
                  className="bg-slate-800 text-white py-2"
                >
                  {method.icon} {method.name}
                </option>
              ))}
            </select>
          </div>

          {/* Withdrawal Details */}
          <div className="bg-slate-800 rounded-xl p-4 space-y-4">
            <h4 className="text-white font-semibold text-center">
              Withdrawal Details
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Your {selectedMethod?.name} Address
                </label>
                <input
                  type="text"
                  value={withdrawalAddress}
                  onChange={(e) => setWithdrawalAddress(e.target.value)}
                  placeholder={`Enter your ${selectedMethod?.name} wallet address`}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent font-mono text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Network
                  </label>
                  <select
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent"
                    defaultValue="mainnet"
                  >
                    <option value="mainnet">Main Network</option>
                    <option value="testnet">Test Network</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Network Fee
                  </label>
                  <div className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                    <span className="text-sm">
                      {selectedMethod?.networkFee}
                    </span>
                  </div>
                </div>
              </div>

              {/* Withdrawal Summary */}
              {amount && (
                <div className="bg-slate-700 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Withdrawal Amount:</span>
                    <span className="text-white">
                      {amount} {selectedMethod?.name.split(" - ")[1]}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Network Fee:</span>
                    <span className="text-red-400">
                      {selectedMethod?.networkFee}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-slate-600">
                    <span className="text-slate-300">You will receive:</span>
                    <span className="text-green-400">
                      {calculateTotal().toFixed(6)}{" "}
                      {selectedMethod?.name.split(" - ")[1]}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Network Warning */}
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-yellow-200 text-xs">
                  <strong>Important:</strong> Ensure the address supports{" "}
                  {selectedMethod?.name}. Withdrawals to incorrect addresses may
                  result in permanent loss of funds.
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="withdraw-terms"
              className="mt-1 w-4 h-4 text-[#0D26FF] bg-slate-700 border-slate-600 rounded focus:ring-[#0D26FF] focus:ring-2"
              required
            />
            <label htmlFor="withdraw-terms" className="text-sm text-slate-400">
              I confirm that the withdrawal address is correct and I authorize
              this transaction.
            </label>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isProcessing || !amount || !withdrawalAddress}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <span>
                Withdraw {amount || "0.00"}{" "}
                {selectedMethod?.name.split(" - ")[1]}
              </span>
            )}
          </button>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              Withdrawals usually complete within 10-30 minutes
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Ensure the address supports the selected network
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
