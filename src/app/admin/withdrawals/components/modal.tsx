"use client";

import { useState } from "react";

export default function WithdrawalModal({
  withdrawal,
  onClose,
  onApproved,
}: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const approveWithdrawal = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/withdrawal/approve", {
        method: "POST",
        body: JSON.stringify({ withdrawalId: withdrawal.id }),
      });

      if (!res.ok) throw new Error("Failed to approve withdrawal");

      onApproved();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-lg w-full max-w-lg relative text-white">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Withdrawal Details</h2>

        <div className="space-y-2 text-sm">
          <p>
            <strong>ID:</strong> {withdrawal.id}
          </p>
          <p>
            <strong>User ID:</strong> {withdrawal.userId}
          </p>
          <p>
            <strong>Amount:</strong> ${withdrawal.amount.toFixed(2)}
          </p>
          <p>
            <strong>Payment Method:</strong> {withdrawal.paymentMethod}
          </p>
          <p>
            <strong>Wallet Address:</strong> {withdrawal.walletAddress}
          </p>
          <p>
            <strong>Status:</strong> {withdrawal.status}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(withdrawal.createdAt).toLocaleString()}
          </p>
        </div>

        {error && <p className="text-red-400 mt-3">{error}</p>}

        {withdrawal.status === "PENDING" ? (
          <button
            onClick={approveWithdrawal}
            className="w-full mt-6 bg-green-600 py-2 rounded hover:bg-green-500 disabled:bg-green-900"
            disabled={loading}
          >
            {loading ? "Approving..." : "Approve Withdrawal"}
          </button>
        ) : (
          <p className="mt-6 text-green-400 font-semibold">
            This withdrawal is already approved.
          </p>
        )}
      </div>
    </div>
  );
}
