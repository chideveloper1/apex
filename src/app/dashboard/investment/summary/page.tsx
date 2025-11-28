// src/components/InvestmentScreen.tsx
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
    <div className=" bg-slate-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Add Investment</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Add New Investment
        </button>
      </div>

      {/* Investment Table */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        {/* Table Header */}
        <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
          <div className="flex justify-between items-center">
            <div className="text-slate-300">
              Showing {investments.length} of {investments.length} entries
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Show</span>
              <select className="bg-slate-600 border border-slate-500 rounded px-3 py-1 text-white text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-slate-300 text-sm">entries</span>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  PACKAGE SELECTED
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  AMOUNT
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  DURATION
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  DOE SAFE
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  STATUS
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase">
                  DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {investments.length > 0 ? (
                investments.map((investment) => (
                  <tr
                    key={investment.id}
                    className="border-b border-slate-700 hover:bg-slate-750 transition-colors"
                  >
                    <td className="py-4 px-6 text-white font-medium">
                      {investment.packageName}
                    </td>
                    <td className="py-4 px-6 text-white">
                      {investment.amount}
                    </td>
                    <td className="py-4 px-6 text-white">
                      {investment.duration}
                    </td>
                    <td className="py-4 px-6 text-white">
                      {investment.doeSafe}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
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
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-8 px-6 text-center text-slate-400"
                  >
                    No data to show
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="bg-slate-700 px-6 py-4 border-t border-slate-600">
          <div className="flex justify-between items-center">
            <div className="text-slate-300 text-sm">
              Showing {investments.length} to {investments.length} of{" "}
              {investments.length} entries
            </div>
            <div className="flex space-x-2">
              <button className="bg-slate-600 hover:bg-slate-500 text-slate-300 px-4 py-2 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="bg-slate-600 hover:bg-slate-500 text-slate-300 px-4 py-2 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Investment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl w-full max-w-md border border-slate-700 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">
                Add New Investment
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
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

            {/* Form */}
            <form onSubmit={handleAddInvestment} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  value={newInvestment.packageName}
                  onChange={(e) =>
                    setNewInvestment({
                      ...newInvestment,
                      packageName: e.target.value,
                    })
                  }
                  placeholder="Enter package name"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Amount ($)
                </label>
                <input
                  type="number"
                  value={newInvestment.amount}
                  onChange={(e) =>
                    setNewInvestment({
                      ...newInvestment,
                      amount: e.target.value,
                    })
                  }
                  placeholder="0.00"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent"
                  required
                  min="1"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Duration (days)
                </label>
                <input
                  type="number"
                  value={newInvestment.duration}
                  onChange={(e) =>
                    setNewInvestment({
                      ...newInvestment,
                      duration: e.target.value,
                    })
                  }
                  placeholder="30"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent"
                  required
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  DOE Safe (%)
                </label>
                <input
                  type="number"
                  value={newInvestment.doeSafe}
                  onChange={(e) =>
                    setNewInvestment({
                      ...newInvestment,
                      doeSafe: e.target.value,
                    })
                  }
                  placeholder="95"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0D26FF] focus:border-transparent"
                  required
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
