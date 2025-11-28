import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        wallet: true,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
}
