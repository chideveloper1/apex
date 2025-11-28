import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: { id: body.userId },
    include: { wallet: true },
  });

  if (!user || !user.wallet) {
    return NextResponse.json(
      { error: "User or wallet not found" },
      { status: 404 }
    );
  }
  if (!user || !user.wallet || user.wallet.length === 0) {
    return NextResponse.json(
      { error: "User or wallet not found" },
      { status: 404 }
    );
  }

  // Pick the first wallet
  const wallet = user.wallet[0];

  const updated = await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: body.amount } },
  });

  return NextResponse.json(updated);
}
