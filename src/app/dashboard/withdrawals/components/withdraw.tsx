"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Withdraw({ wallet }: { wallet: any }) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("btc");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (!walletAddress.trim()) {
      toast.error("Please enter a wallet address");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/withdrawal", {
        amount: Number(amount),
        paymentMethod,
        walletAddress: walletAddress,
        userId: wallet.userId,
      });
      if (response.status === 200) {
        setLoading(false);
        toast.success("Withdrawal request sent successfully");
        setAmount("");
        setPaymentMethod("btc");
        setWalletAddress("");
        router.push("/dashboard/withdrawals/summary");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send withdrawal request");
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-200 mb-2">
            Withdraw
          </h1>
          {wallet.balance <= 10 && (
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                You cannot request withdrawal because your account is empty.{" "}
                <button className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  Click to invest New
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amount (in USD):{" "}
              {wallet.balance <= 10 ? (
                <span className="text-red-400">
                  Available Balance (${wallet.balance}) - (Insufficient Funds)
                </span>
              ) : (
                <span className="text-green-400">
                  Available Balance (${wallet.balance})
                </span>
              )}
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                disabled={wallet.balance <= 10}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="usdt" className="bg-gray-800">
                USDT
              </option>
              <option value="btc" className="bg-gray-800">
                Bitcoin - BTC
              </option>
              <option value="eth" className="bg-gray-800">
                Ethereum - ETH
              </option>
            </select>
          </div>

          {/* Wallet Address */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Address:
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter wallet Address"
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={wallet.balance <= 10}
            className="w-full py-3 px-4 bg-blue-600 text-gray-100 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Request Withdrawal
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-2">
            Withdrawal Information:
          </h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Minimum withdrawal: $10.00</li>
            <li>• Processing time: 1-3 business days</li>
            <li>• Network fees apply</li>
            <li>• Ensure wallet address is correct</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
