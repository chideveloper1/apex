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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-slate-900 rounded-2xl w-full max-w-full sm:max-w-md max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Withdraw Funds
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {/* Balance */}
          <div className="bg-slate-800 rounded-xl p-3 text-center">
            <div className="text-slate-400 text-sm mb-1">Available Balance</div>
            <div className="text-xl sm:text-2xl font-bold text-white">
              0.00 {selectedMethod?.name.split(" - ")[1]}
            </div>
          </div>

          {/* Amount */}
          <div className="text-center">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-2xl sm:text-4xl font-bold text-white text-center placeholder-slate-500 focus:outline-none border-none"
              required
              min="0.001"
              step="0.001"
            />
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Minimum withdrawal: {selectedMethod?.minimum}
            </p>
          </div>

          {/* Withdrawal Method */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1">
              Select Withdrawal Method
            </label>
            <select
              value={withdrawalMethod}
              onChange={(e) => setWithdrawalMethod(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl p-3 sm:p-4 text-white text-sm sm:text-lg focus:outline-none focus:border-blue-500"
            >
              {withdrawalMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.icon} {method.name}
                </option>
              ))}
            </select>
          </div>

          {/* Withdrawal Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1">
              Your {selectedMethod?.name} Address
            </label>
            <input
              type="text"
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              placeholder={`Enter your ${selectedMethod?.name} wallet address`}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Summary */}
          {amount && (
            <div className="bg-slate-700 rounded-lg p-3 space-y-1">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-400">Withdrawal Amount:</span>
                <span className="text-white">
                  {amount} {selectedMethod?.name.split(" - ")[1]}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-400">Network Fee:</span>
                <span className="text-red-400">
                  {selectedMethod?.networkFee}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm font-semibold pt-1 border-t border-slate-600">
                <span className="text-slate-300">You will receive:</span>
                <span className="text-green-400">
                  {calculateTotal().toFixed(6)}{" "}
                  {selectedMethod?.name.split(" - ")[1]}
                </span>
              </div>
            </div>
          )}

          {/* Terms */}
          <div className="flex items-start space-x-2 text-xs sm:text-sm">
            <input
              type="checkbox"
              id="withdraw-terms"
              className="mt-1 w-3 h-3 sm:w-4 sm:h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
              required
            />
            <label htmlFor="withdraw-terms" className="text-slate-400">
              I confirm that the withdrawal address is correct and authorize
              this transaction.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isProcessing || !amount || !withdrawalAddress}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <span>
                Withdraw {amount || "0.00"}{" "}
                {selectedMethod?.name.split(" - ")[1]}
              </span>
            )}
          </button>

          {/* Info */}
          <p className="text-slate-500 text-xs sm:text-sm text-center mt-2">
            Withdrawals usually complete within 10-30 minutes. Ensure the
            address supports the selected network.
          </p>
        </form>
      </div>
    </div>
  );
}
