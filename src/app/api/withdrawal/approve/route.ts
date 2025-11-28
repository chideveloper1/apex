import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { withdrawalId } = await req.json();

    // Get withdrawal
    const withdrawal = await prisma.withdrawal.findUnique({
      where: { id: withdrawalId },
    });

    if (!withdrawal) {
      return NextResponse.json(
        { error: "Withdrawal not found" },
        { status: 404 }
      );
    }

    if (withdrawal.status !== "PENDING") {
      return NextResponse.json(
        { error: "Withdrawal already processed" },
        { status: 400 }
      );
    }

    // Get wallet
    const wallet = await prisma.wallet.findFirst({
      where: { userId: withdrawal.userId },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "User wallet not found" },
        { status: 404 }
      );
    }

    if (wallet.balance < withdrawal.amount) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    // Approve withdrawal + deduct balance
    await prisma.$transaction([
      prisma.withdrawal.update({
        where: { id: withdrawal.id },
        data: { status: "APPROVED" },
      }),
      prisma.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: wallet.balance - withdrawal.amount,
        },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
