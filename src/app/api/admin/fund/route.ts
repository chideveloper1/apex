import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const wallet = await prisma.wallet.findFirst({
    where: { userId: body.userId },
  });

  if (!wallet) {
    return NextResponse.json(
      { error: "User wallet not found" },
      { status: 404 }
    );
  }

  const updated = await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: Number(body.amount) } },
  });

  return NextResponse.json(updated);
}
