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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* GRID LAYOUT — sidebar + content */}
      <div className="flex">
        {/* SIDEBAR – hidden on mobile (sidebar component controls mobile toggle) */}
        <DashboardSidebar />

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-screen md:ml-0">
          {/* NAV — visible on all screens */}
          <div className="sticky top-0 z-30">
            <Nav />
          </div>

          {/* CONTENT SECTION */}
          <div className="p-4 md:p-6">
            {user && (user.idcard !== null || user.passport !== null) ? (
              <main className="min-h-[calc(100vh-80px)]">{children}</main>
            ) : (
              <KYCPage id={user?.id!} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
