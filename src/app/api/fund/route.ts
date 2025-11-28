import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { depositId } = await req.json();

    // Get deposit
    const deposit = await prisma.deposit.findUnique({
      where: { id: depositId },
    });

    if (!deposit) {
      return NextResponse.json({ error: "Deposit not found" }, { status: 404 });
    }

    if (deposit.status !== "PENDING") {
      return NextResponse.json(
        { error: "Deposit already processed" },
        { status: 400 }
      );
    }

    // Get wallet
    const wallet = await prisma.wallet.findFirst({
      where: { userId: deposit.userId },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "User wallet not found" },
        { status: 404 }
      );
    }

    // Approve + Add Funds
    await prisma.$transaction([
      prisma.deposit.update({
        where: { id: deposit.id },
        data: { status: "APPROVED" },
      }),
      prisma.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: wallet.balance + deposit.amount,
        },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
