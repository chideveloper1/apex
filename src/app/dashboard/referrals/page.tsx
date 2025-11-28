import React from "react";
import Referrals from "./components/referrals";
import { getUser } from "@/app/action/getUser";

export default async function page() {
  const user = await getUser();
  return <Referrals user={user} />;
}
