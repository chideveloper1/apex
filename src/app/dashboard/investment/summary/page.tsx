"use client";

import { useState } from "react";

interface Investment {
  id: string;
  packageName: string;
  amount: string;
  duration: string;
  doeSafe: string;
  status: "Active" | "Completed" | "Pending" | "Cancelled";
  date: string;
}

export default function InvestmentScreen() {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: "1",
      packageName: "Starter Package",
      amount: "$1,000.00",
      duration: "30 days",
      doeSafe: "95%",
      status: "Active",
      date: "2024-01-15",
    },
    {
      id: "2",
      packageName: "Premium Package",
      amount: "$5,000.00",
      duration: "90 days",
      doeSafe: "97%",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      id: "3",
      packageName: "Starter Package",
      amount: "$1,000.00",
      duration: "30 days",
      doeSafe: "95%",
      status: "Cancelled",
      date: "2024-01-15",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newInvestment, setNewInvestment] = useState({
    packageName: "",
    amount: "",
    duration: "",
    doeSafe: "",
  });

  const handleAddInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    const investment: Investment = {
      id: (investments.length + 1).toString(),
      packageName: newInvestment.packageName,
      amount: `$${parseFloat(newInvestment.amount).toFixed(2)}`,
      duration: `${newInvestment.duration} days`,
      doeSafe: `${newInvestment.doeSafe}%`,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setInvestments([...investments, investment]);
    setNewInvestment({
      packageName: "",
      amount: "",
      duration: "",
      doeSafe: "",
    });
    setShowAddModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Completed":
        return "bg-blue-500";
      case "Pending":
        return "bg-yellow-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-slate-900 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Add Investment
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
        >
          Add New Investment
        </button>
      </div>

      {/* RESPONSIVE TABLE WRAPPER */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="bg-slate-700 px-4 sm:px-6 py-4 border-b border-slate-600 text-sm sm:text-base">
          Showing {investments.length} entries
        </div>

        {/* CARD VIEW ON MOBILE, TABLE ON DESKTOP */}
        <div className="block sm:hidden">
          {investments.map((investment) => (
            <div
              key={investment.id}
              className="border-b border-slate-700 p-4 space-y-2"
            >
              <div className="text-white font-semibold">
                {investment.packageName}
              </div>
              <div className="text-slate-300 text-sm">
                Amount: {investment.amount}
              </div>
              <div className="text-slate-300 text-sm">
                Duration: {investment.duration}
              </div>
              <div className="text-slate-300 text-sm">
                DOE Safe: {investment.doeSafe}
              </div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs text-white ${getStatusColor(
                  investment.status
                )}`}
              >
                {investment.status}
              </span>

              <div className="text-slate-400 text-xs">{investment.date}</div>
            </div>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                {[
                  "Package",
                  "Amount",
                  "Duration",
                  "DOE Safe",
                  "Status",
                  "Date",
                ].map((t) => (
                  <th
                    key={t}
                    className="text-left py-4 px-6 text-slate-400 text-sm uppercase font-semibold"
                  >
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investments.map((investment) => (
                <tr
                  key={investment.id}
                  className="border-b border-slate-700 hover:bg-slate-750"
                >
                  <td className="py-4 px-6 text-white">
                    {investment.packageName}
                  </td>
                  <td className="py-4 px-6 text-white">{investment.amount}</td>
                  <td className="py-4 px-6 text-white">
                    {investment.duration}
                  </td>
                  <td className="py-4 px-6 text-white">{investment.doeSafe}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(
                        investment.status
                      )}`}
                    >
                      {investment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    {investment.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="bg-slate-700 px-4 sm:px-6 py-4 text-slate-300 text-sm flex justify-between">
          <span>Showing {investments.length} entries</span>
        </div>
      </div>

      {/* MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 w-full max-w-md rounded-xl border border-slate-700">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-lg font-bold text-white">
                Add New Investment
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddInvestment} className="p-6 space-y-4">
              {[
                { label: "Package Name", key: "packageName" },
                { label: "Amount ($)", key: "amount", type: "number" },
                { label: "Duration (days)", key: "duration", type: "number" },
                { label: "DOE Safe (%)", key: "doeSafe", type: "number" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-slate-400 text-sm mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    value={(newInvestment as any)[field.key]}
                    onChange={(e) =>
                      setNewInvestment({
                        ...newInvestment,
                        [field.key]: e.target.value,
                      })
                    }
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                    required
                  />
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg"
                >
                  Add Investment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
