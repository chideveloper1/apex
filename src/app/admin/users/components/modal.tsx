"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserModal({ user, onClose }: any) {
  const [fundModalOpen, setFundModalOpen] = useState(false);
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);
  const [fundAmount, setFundAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Fund user wallet
  const handleFund = async () => {
    if (!fundAmount || Number(fundAmount) <= 0) return;
    setIsProcessing(true);
    try {
      await axios.post("/api/admin/fund", {
        userId: user.id,
        amount: Number(fundAmount),
      });
      setIsProcessing(false);
      setFundAmount("");
      setFundModalOpen(false);
      toast.success("Wallet funded successfully!");
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      toast.error("Failed to fund wallet");
    }
  };

  // Verify user
  const handleVerify = async () => {
    setIsProcessing(true);
    try {
      await axios.post("/api/admin/verify", { userId: user.id });
      setIsProcessing(false);
      setVerifyModalOpen(false);
      toast.success("User verified successfully!");
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      toast.error("Failed to verify user");
    }
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4 overflow-y-auto">
        <div className="bg-slate-900 p-6 rounded-lg w-full max-w-2xl shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4">User Details</h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username || "-"}
            </p>
            <p>
              <strong>First Name:</strong> {user.firstName || "-"}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastName || "-"}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || "-"}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender || "-"}
            </p>
            <p>
              <strong>Address:</strong> {user.address || "-"}
            </p>
            <p>
              <strong>Country:</strong> {user.country || "-"}
            </p>
            <p>
              <strong>City:</strong> {user.city || "-"}
            </p>
            <p>
              <strong>Zipcode:</strong> {user.zipcode || "-"}
            </p>
            <p>
              <strong>Stock Experience:</strong> {user.stockExperience || "-"}
            </p>
            <p>
              <strong>Primary Goal:</strong> {user.primaryGoal || "-"}
            </p>
            <p>
              <strong>Account Type:</strong> {user.accountType || "-"}
            </p>
            <p>
              <strong>Annual Income:</strong> {user.annualIncome || "-"}
            </p>
            <p>
              <strong>Initial Deposit Source:</strong>{" "}
              {user.initialDepositSource || "-"}
            </p>
            <p>
              <strong>Ongoing Deposit Source:</strong>{" "}
              {user.ongoingDepositSource || "-"}
            </p>
            <p>
              <strong>Account Currency:</strong> {user.accountCurrency || "-"}
            </p>
            <p>
              <strong>Referral Code:</strong> {user.referralCode || "-"}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Email Verified:</strong>{" "}
              {user.emailVerified ? "Yes" : "No"}
            </p>
            <p>
              <strong>Admin Verified:</strong>{" "}
              {user.adminVerified ? "Yes" : "No"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(user.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Wallet Balance:</strong> {user.wallet?.[0]?.balance || 0}
            </p>
          </div>

          {/* Images */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">ID & Passport</h3>
            <div className="flex gap-4">
              {user.idcard ? (
                <a href={user.idcard} download="idcard">
                  <img
                    src={user.idcard}
                    className="w-40 h-40 object-cover rounded border border-slate-700 cursor-pointer hover:opacity-80"
                    alt="ID Card"
                  />
                </a>
              ) : (
                <p>No ID uploaded</p>
              )}

              {user.passport ? (
                <a href={user.passport} download="passport">
                  <img
                    src={user.passport}
                    className="w-40 h-40 object-cover rounded border border-slate-700 cursor-pointer hover:opacity-80"
                    alt="Passport"
                  />
                </a>
              ) : (
                <p>No passport uploaded</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setFundModalOpen(true)}
              className="flex-1 bg-blue-600 py-2 rounded hover:bg-blue-500 text-white"
            >
              Fund Wallet
            </button>
            {!user.adminVerified && (
              <button
                onClick={() => setVerifyModalOpen(true)}
                className="flex-1 bg-green-600 py-2 rounded hover:bg-green-500 text-white"
              >
                Verify User
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fund Modal */}
      {fundModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-slate-900 rounded-2xl w-full max-w-md p-6 border border-slate-700 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              Fund {user.email}
            </h3>
            <input
              type="number"
              value={fundAmount}
              onChange={(e) => setFundAmount(e.target.value)}
              placeholder="Amount"
              min="0"
              step="0.01"
              className="w-full p-3 rounded-xl bg-slate-800 text-white mb-4 focus:outline-none border border-slate-600"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setFundModalOpen(false)}
                className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleFund}
                disabled={isProcessing}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Fund Wallet"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verify Modal */}
      {verifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-slate-900 rounded-2xl w-full max-w-md p-6 border border-slate-700 shadow-xl text-center">
            <h3 className="text-lg font-bold text-white mb-4">
              Verify {user.email}
            </h3>
            <p className="text-slate-400 mb-6">
              Are you sure you want to verify this user?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setVerifyModalOpen(false)}
                className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleVerify}
                disabled={isProcessing}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Verify"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
