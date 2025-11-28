import React from "react";
import MultiStepForm from "./components/multistepsform";
import { getUser } from "../action/getUser";

export default async function page() {
  const user = await getUser();
  return (
    <div>
      <MultiStepForm id={user?.id!} />
    </div>
  );
}
