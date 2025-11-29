"use client";

import { useEffect, useState } from "react";
import RecentInvestments from "./components/recent";
import StatCard from "./components/statcard";
import CopyTradingStrategies from "./components/trading";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/dashboard`, { method: "GET" });
        const data = await res.json();
        setDashboard(data);
      } catch (err) {
        console.error("Failed to fetch dashboard", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // -------------------------------------------
  // 👉 Helper: Safely convert numbers
  // -------------------------------------------
  const num = (value: any) => Number(value ?? 0);

  // -------------------------------------------
  // 👉 Loading State
  // -------------------------------------------
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Skeleton Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-800 rounded-md" />
          ))}
        </div>

        {/* Skeleton Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-800 rounded-md" />
          ))}
        </div>

        {/* Skeleton Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="h-64 bg-slate-800 rounded-md" />
          <div className="h-64 bg-slate-800 rounded-md lg:col-span-2" />
        </div>
      </div>
    );
  }

  // -------------------------------------------
  // 👉 Render Actual Dashboard
  // -------------------------------------------
  return (
    <div className="space-y-6">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Assets Balance"
          value={`$${num(dashboard?.wallet?.balance).toFixed(2)}`}
          subtitle="in $0.00"
          variant="balance"
        />

        <StatCard
          title="Cash"
          value={`$${num(dashboard?.wallet?.balance).toFixed(2)}`}
          subtitle=""
          variant="cash"
        />

        <StatCard
          title="Profit from Trading"
          value={`$${(
            num(dashboard?.wallet?.balance) - num(dashboard?.total)
          ).toFixed(2)}`}
          subtitle="Progressive"
          variant="trading"
        />

        <StatCard
          title="Total Trading Amount"
          value="$0.00"
          subtitle="Progressive"
          variant="total"
        />
      </div>

      {/* Middle Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Investments"
          value={`$${num(dashboard?.total).toFixed(2)}`}
          subtitle="Progressive"
          variant="default"
        />
        <StatCard
          title="Total Withdrawals"
          value={`$${num(dashboard?.totalWithdrawal).toFixed(2)}`}
          subtitle="Progressive"
          variant="default"
        />
        <StatCard
          title="Total Relevals"
          value="$0.00"
          subtitle="Progressive"
          variant="default"
        />
        <StatCard
          title="No. of Investments"
          value="0"
          subtitle="Progressive"
          variant="default"
          showProgress={false}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1">
          <CopyTradingStrategies />
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Section */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Payment Name</h3>
              <button className="text-[#0D26FF] hover:text-[#0a1ecc] text-sm font-medium">
                Explore More
              </button>
            </div>
            <div className="text-center py-8 text-slate-500">
              No payment methods configured
            </div>
          </div>

          {/* Recent Investments */}
          <RecentInvestments />
        </div>
      </div>
    </div>
  );
}
