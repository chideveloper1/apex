import { authOptions } from "@/utils/authOptions";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const total = await prisma.deposit.aggregate({
    _sum: { amount: true },
  });

  const totalWithdrawal = await prisma.withdrawal.aggregate({
    _sum: { amount: true },
  });

  const wallet = await prisma.wallet.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });

  return NextResponse.json({
    total: total._sum.amount ?? 0,
    totalWithdrawal: totalWithdrawal._sum.amount ?? 0,
    wallet,
  });
}
