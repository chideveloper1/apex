import getWithdrawal from "@/app/action/getWithdrawal";
import React from "react";
import WithdrawalSummary from "../components/summary";

export default async function page() {
  const withdrawal = await getWithdrawal();
  return (
    <div>
      <WithdrawalSummary withdrawal={withdrawal} />
    </div>
  );
}
