import { getUser } from "./getUser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getDeposit() {
  try {
    const user = await getUser();

    const deposit = await prisma.deposit.findMany({
      where: { userId: user?.id },
      include: { user: true },
    });

    return deposit;
  } catch (error: any) {
    throw new Error(error);
  }
}
