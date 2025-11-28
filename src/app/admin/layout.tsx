// "use client";
import React from "react";
import Nav from "../dashboard/components/nav";
import AdminSidebar from "./components/admin-sidebar";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const { data: session }: any = useSession();
  //   const router = useRouter();

  //   if (session && session?.user?.role !== "ADMIN") {
  //     console.log("first", session?.user?.role);
  //     router.push("/");
  //   }
  return (
    <div className="flex h-screen bg-slate-900">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav />
        <main className="flex-1 overflow-auto p-0 md:p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
