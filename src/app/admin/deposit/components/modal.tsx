"use client";

import { useState } from "react";

export default function DepositModal({ deposit, onClose, onApproved }: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const approveDeposit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/fund", {
        method: "POST",
        body: JSON.stringify({ depositId: deposit.id }),
      });

      if (!res.ok) throw new Error("Failed to approve deposit");

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

        <h2 className="text-2xl font-bold mb-4">Deposit Details</h2>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Deposit ID:</strong> {deposit.id}
          </p>
          <p>
            <strong>User ID:</strong> {deposit.userId}
          </p>
          <p>
            <strong>Amount:</strong> ${deposit.amount.toFixed(2)}
          </p>
          <p>
            <strong>Payment Method:</strong> {deposit.paymentMethod}
          </p>
          <p>
            <strong>Status:</strong> {deposit.status}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(deposit.createdAt).toLocaleString()}
          </p>
        </div>

        {error && <p className="text-red-400 mt-3">{error}</p>}

        {deposit.status === "PENDING" ? (
          <button
            onClick={approveDeposit}
            className="w-full mt-6 bg-green-600 py-2 rounded hover:bg-green-500 disabled:bg-green-900"
            disabled={loading}
          >
            {loading ? "Approving..." : "Approve Deposit"}
          </button>
        ) : (
          <p className="mt-6 text-green-400 font-semibold">
            This deposit is already approved.
          </p>
        )}
      </div>
    </div>
  );
}
