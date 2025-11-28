import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const updated = await prisma.user.update({
    where: { id: body.userId },
    data: { adminVerified: true },
  });

  return NextResponse.json(updated);
}
