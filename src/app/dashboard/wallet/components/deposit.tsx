// src/components/DepositModal.tsx
"use client";

import axios from "axios";
import { useState } from "react";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: any;
}

export default function DepositModal({
  isOpen,
  onClose,
  wallet,
}: DepositModalProps) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("btc");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "btc",
      name: "Bitcoin - BTC",
      icon: "₿",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      minimum: "0.001 BTC",
    },
    {
      id: "eth",
      name: "Ethereum - ETH",
      icon: "Ξ",
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      minimum: "0.01 ETH",
    },
    {
      id: "usdt",
      name: "Tether - USDT",
      icon: "USDT",
      address: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
      minimum: "0.1 USDT",
    },
  ];

  const selectedMethod = paymentMethods.find(
    (method) => method.id === paymentMethod
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    try {
      await axios.post("/api/deposit", {
        amount: Number(amount),
        paymentMethod,
        userId: wallet.userId,
      });
      setIsProcessing(false);
      onClose();
      setAmount("");
    } catch (error) {
      console.error("Deposit failed:", error);
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedMethod?.address || "");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Fund your account</h2>
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
          {/* Amount Section */}
          <div className="text-center">
            <div className="mb-2">
              <span className="text-slate-400 text-lg">I want to fund</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent text-4xl font-bold text-white text-center placeholder-slate-500 focus:outline-none border-none"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Select Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-slate-800 border-2 border-slate-600 rounded-xl p-4 text-white text-lg font-medium focus:outline-none focus:border-[#0D26FF] transition-all appearance-none"
            >
              {paymentMethods.map((method) => (
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

          {/* Crypto Payment Details - Shows for all crypto methods */}
          <div className="bg-slate-800 rounded-xl p-4 space-y-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  {selectedMethod?.name} Address
                </label>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-white font-mono text-sm break-all">
                    {selectedMethod?.address}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Copy Address
                </button>
                <button
                  type="button"
                  className="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Share
                </button>
              </div>
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
                  <strong>Important:</strong> Only send{" "}
                  {selectedMethod?.name.split(" - ")[0]} to this address.
                  Sending other cryptocurrencies may result in permanent loss.
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isProcessing || !amount}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <span>Fund Wallet</span>
            )}
          </button>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              Minimum deposit: {selectedMethod?.minimum}
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Transaction usually complete within 10-30 minutes
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
