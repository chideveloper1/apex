import getWallet from "@/app/action/getWallet";
import React from "react";
import DashboardNav from "./navbar";

export default async function Nav() {
  const wallet = await getWallet();

  return <DashboardNav wallet={wallet} />;
}
