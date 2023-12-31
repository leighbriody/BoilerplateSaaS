import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import UserTable from "@/components/UserTable";
export default async function Jobs() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in?callbackUrl=/dashboard/profile");
  }
  return <UserTable />;
}
