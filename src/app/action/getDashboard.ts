import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDashboardData() {
  // TODO: Implement dashboard data fetching
  const users = await prisma.user.count();
  const deposits = await prisma.deposit.count();
  const withdrawals = await prisma.withdrawal.count();

  return {
    users,
    deposits,
    withdrawals,
  };
}
