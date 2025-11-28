import React from "react";
import Withdraw from "./components/withdraw";
import getWallet from "@/app/action/getWallet";

export default async function page() {
  const wallet = await getWallet();
  return (
    <div>
      <Withdraw wallet={wallet} />
    </div>
  );
}
