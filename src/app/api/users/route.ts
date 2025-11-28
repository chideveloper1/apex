import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany({
    where: { role: "USER" },
  });

  return NextResponse.json(users);
}
