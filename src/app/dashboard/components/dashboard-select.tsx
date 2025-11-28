import { getUser } from "@/app/action/getUser";
import React from "react";
import Nav from "./nav";

export default async function DashboardSelect({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <div className="w-full">
      {user && user.firstName ? (
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          <Nav />

          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          <Nav />

          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      )}
    </div>
  );
}
