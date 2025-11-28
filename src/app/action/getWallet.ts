import { getUser } from "./getUser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getWallet() {
  try {
    const user = await getUser();

    const wallet = await prisma.wallet.findFirst({
      where: { userId: user?.id },
      include: {
        user: true,
      },
    });

    return wallet;
  } catch (error: any) {
    throw new Error(error);
  }
}
