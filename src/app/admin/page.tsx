import React from "react";
import AdminStatCard from "./components/stat";
import { getDashboardData } from "../action/getDashboard";

export default async function page() {
  const dashboard = await getDashboardData();
  return (
    <div className="space-y-6">
      {/* Top Stats Grid - Exact layout from screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Stat cards would go here */}
        <AdminStatCard
          title="Users"
          value={dashboard.users.toString()}
          subtitle="Total users"
          variant="users"
        />
        <AdminStatCard
          title="Deposits"
          value={dashboard.deposits.toString()}
          subtitle="Total deposits"
          variant="deposit"
        />
        <AdminStatCard
          title="Withdrawals"
          value={dashboard.withdrawals.toString()}
          subtitle="Total withdrawals"
          variant="withdraw"
        />
      </div>
    </div>
  );
}
