import React from "react";
import DashboardSidebar from "./sidebar";
import Nav from "./nav";
import KYCPage from "./kyc";
import { getUser } from "@/app/action/getUser";

export default async function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <div className="flex h-screen bg-slate-900">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav />
        {(user && user.idcard !== null) || (user && user.passport !== null) ? (
          <main className="flex-1 overflow-auto p-6">{children}</main>
        ) : (
          <KYCPage id={user?.id!} />
        )}
      </div>
    </div>
  );
}
