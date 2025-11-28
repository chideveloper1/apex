import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface IParams {
  id: string;
}

export async function PUT(
  request: Request,
  context: { params: Promise<IParams> }
) {
  // ⬅️ FIX: await the params
  const { id } = await context.params;

  const body = await request.json();

  const updated = await prisma.user.update({
    where: {
      id,
    },
    data: body,
  });

  return NextResponse.json(updated);
}
