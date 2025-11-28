import React from "react";
import AccountSettings from "./components/settings";
import { getUser } from "@/app/action/getUser";

export default async function page() {
  const user = await getUser();
  return <AccountSettings user={user} />;
}
