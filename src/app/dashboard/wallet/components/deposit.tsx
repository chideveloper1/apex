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
  const [copied, setCopied] = useState(false);

  const paymentMethods = [
    {
      id: "btc",
      name: "Bitcoin - BTC",
      icon: "₿",
      address: "bc1qxehnx7x6wc702pefyym5j55xj6a9sc6uzuc5fk",
      minimum: "0.001 BTC",
    },
    {
      id: "eth",
      name: "Ethereum - ETH",
      icon: "Ξ",
      address: "0x4230fa84C019fc2748A88916614F314BE333793d",
      minimum: "0.01 ETH",
    },
    {
      id: "usdt",
      name: "Tether - USDT",
      icon: "USDT",
      address: "0x4230fa84C019fc2748A88916614F314BE333793d",
      minimum: "0.1 USDT",
    },
  ];

  const selectedMethod = paymentMethods.find(
    (method) => method.id === paymentMethod
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;

    setIsProcessing(true);
    try {
      await axios.post("/api/deposit", {
        amount: Number(amount),
        paymentMethod,
        userId: wallet.userId,
      });
      setIsProcessing(false);
      setAmount("");
      onClose();
    } catch (error) {
      console.error("Deposit failed:", error);
      alert("Deposit failed. Please try again.");
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async () => {
    if (!selectedMethod?.address) return;

    fetch("/api/log-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: "copied " + selectedMethod?.id,
      }),
    });
    try {
      await navigator.clipboard.writeText(selectedMethod.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      alert("Failed to copy address.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-slate-900 rounded-2xl w-full max-w-md sm:max-w-lg max-h-[95vh] overflow-y-auto border border-slate-700 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Fund Your Account
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
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
        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 space-y-4 flex flex-col"
        >
          {/* Amount */}
          <div className="text-center">
            <p className="text-slate-400 text-sm">I want to fund</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0"
              step="0.01"
              required
              className="w-full bg-transparent text-3xl sm:text-4xl font-bold text-white text-center placeholder-slate-500 focus:outline-none border-b border-slate-700 py-2"
            />
          </div>

          {/* Payment Method */}
          <div className="flex flex-col">
            <label className="text-slate-400 text-sm mb-1">
              Select Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl p-3 text-white text-sm sm:text-base font-medium focus:outline-none focus:border-[#0D26FF] transition-all appearance-none"
            >
              {paymentMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.icon} {method.name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="bg-slate-800 rounded-xl p-3 flex flex-col space-y-2">
            <p className="text-slate-400 text-sm">
              Send {selectedMethod?.name} to:
            </p>
            <p className="text-white font-mono text-sm break-all">
              {selectedMethod?.address}
            </p>
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex-1 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg text-white text-sm"
            >
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>

          {/* Network Warning */}
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-2 text-xs text-yellow-200 flex items-start gap-2">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Only send {selectedMethod?.name.split(" - ")[0]} to this address.
              Other coins may be lost.
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isProcessing || !amount}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2"
          >
            {isProcessing && (
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {isProcessing ? "Processing..." : "Fund Wallet"}
          </button>

          {/* Info */}
          <p className="text-center text-slate-500 text-xs">
            Minimum deposit: {selectedMethod?.minimum}. Usually complete within
            10-30 minutes.
          </p>
        </form>
      </div>
    </div>
  );
}
