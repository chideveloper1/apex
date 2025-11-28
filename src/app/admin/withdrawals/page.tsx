"use client";

import { useEffect, useState } from "react";
import WithdrawalModal from "./components/modal";

export default function WithdrawalsPage() {
  const [withdrawals, setWithdrawals] = useState<any[]>([]);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<any | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const loadWithdrawals = async () => {
    try {
      const res = await fetch("/api/withdrawal");
      const data = await res.json();
      setWithdrawals(data);
    } catch (err) {
      console.error("Failed to load withdrawals:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWithdrawals();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">Withdrawals</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-left">
            <thead className="bg-slate-700 text-sm">
              <tr>
                <th className="p-3">User ID</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Payment Method</th>
                <th className="p-3">Wallet Address</th>
                <th className="p-3">Status</th>
                <th className="p-3">Created At</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {withdrawals.map((w) => (
                <tr
                  key={w.id}
                  className="border-t border-slate-700 hover:bg-slate-600 transition"
                >
                  <td className="p-3">{w.userId}</td>
                  <td className="p-3">${w.amount.toFixed(2)}</td>
                  <td className="p-3">{w.paymentMethod}</td>
                  <td className="p-3">{w.walletAddress}</td>
                  <td
                    className={`p-3 font-bold ${
                      w.status === "APPROVED"
                        ? "text-green-400"
                        : w.status === "REJECTED"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {w.status}
                  </td>
                  <td className="p-3">
                    {new Date(w.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedWithdrawal(w)}
                      className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {withdrawals.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-slate-400">
                    No withdrawals found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {selectedWithdrawal && (
        <WithdrawalModal
          withdrawal={selectedWithdrawal}
          onClose={() => setSelectedWithdrawal(null)}
          onApproved={() => {
            setSelectedWithdrawal(null);
            loadWithdrawals();
          }}
        />
      )}
    </div>
  );
}
