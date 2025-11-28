"use client";

import { useEffect, useState } from "react";
import DepositModal from "./components/modal";

export default function DepositsPage() {
  const [deposits, setDeposits] = useState<any[]>([]);
  const [selectedDeposit, setSelectedDeposit] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const loadDeposits = async () => {
    try {
      const res = await fetch("/api/deposit");
      const data = await res.json();
      setDeposits(data);
    } catch (err) {
      console.error("Failed to load deposits:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDeposits();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white p-4 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">Deposits</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* DESKTOP TABLE */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-left">
              <thead className="bg-slate-700 text-sm">
                <tr>
                  <th className="p-3">User ID</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Created At</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {deposits.map((d) => (
                  <tr
                    key={d.id}
                    className="border-t border-slate-700 hover:bg-slate-600 transition"
                  >
                    <td className="p-3">{d.userId}</td>
                    <td className="p-3">${d.amount.toFixed(2)}</td>
                    <td className="p-3">{d.paymentMethod}</td>
                    <td
                      className={`p-3 font-bold ${
                        d.status === "APPROVED"
                          ? "text-green-400"
                          : d.status === "REJECTED"
                          ? "text-red-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {d.status}
                    </td>
                    <td className="p-3">
                      {new Date(d.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedDeposit(d)}
                        className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {deposits.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-slate-400">
                      No deposits found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD VIEW */}
          <div className="md:hidden space-y-4">
            {deposits.map((d) => (
              <div
                key={d.id}
                className="bg-slate-700 p-4 rounded-lg border border-slate-600"
              >
                <p>
                  <span className="font-semibold">User ID:</span> {d.userId}
                </p>
                <p>
                  <span className="font-semibold">Amount:</span> $
                  {d.amount.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold">Payment Method:</span>{" "}
                  {d.paymentMethod}
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      d.status === "APPROVED"
                        ? "text-green-400 font-bold"
                        : d.status === "REJECTED"
                        ? "text-red-400 font-bold"
                        : "text-yellow-400 font-bold"
                    }
                  >
                    {d.status}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Created:</span>{" "}
                  {new Date(d.createdAt).toLocaleString()}
                </p>

                <button
                  onClick={() => setSelectedDeposit(d)}
                  className="mt-3 w-full py-2 bg-blue-600 rounded hover:bg-blue-500"
                >
                  View Details
                </button>
              </div>
            ))}

            {deposits.length === 0 && (
              <p className="text-center text-slate-400">No deposits found</p>
            )}
          </div>
        </>
      )}

      {selectedDeposit && (
        <DepositModal
          deposit={selectedDeposit}
          onClose={() => setSelectedDeposit(null)}
          onApproved={() => {
            setSelectedDeposit(null);
            loadDeposits();
          }}
        />
      )}
    </div>
  );
}
