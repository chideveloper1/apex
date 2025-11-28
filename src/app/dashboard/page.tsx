// src/app/dashboard/page.tsx
"use client";
import RecentInvestments from "./components/recent";
import StatCard from "./components/statcard";
import CopyTradingStrategies from "./components/trading";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats Grid - Exact layout from screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Assets Balance"
          value="$0.00"
          subtitle="in $0.00"
          variant="balance"
        />
        <StatCard title="Cash" value="$0.00" subtitle="" variant="cash" />
        <StatCard
          title="Profit from Investment"
          value="$0.00"
          subtitle="Progressive"
          variant="investment"
        />
        <StatCard
          title="Profit from Trading"
          value="$0.00"
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
          value="$0.00"
          subtitle="Progressive"
          variant="default"
        />
        <StatCard
          title="Total Withdrawals"
          value="$0.00"
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
        {/* Left Column - Copy Trading Strategies */}
        <div className="lg:col-span-1">
          <CopyTradingStrategies />
        </div>

        {/* Middle Column - Payment Name & Recent Investments */}
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Name Section */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Payment Name</h3>
              <button className="text-[#0D26FF] hover:text-[#0a1ecc] text-sm font-medium">
                Explore More
              </button>
            </div>
            {/* Empty state for payment name */}
            <div className="text-center py-8 text-slate-500">
              No payment methods configured
            </div>
          </div>

          {/* Recent Investments */}
          <RecentInvestments />
        </div>

        {/* Right Column - Welcome Section
        <div className="lg:col-span-1">
          <WelcomeSection />
        </div> */}
      </div>
    </div>
  );
}
