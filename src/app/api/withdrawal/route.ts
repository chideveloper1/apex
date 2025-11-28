import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const updated = await prisma.withdrawal.create({
    data: body,
  });

  return NextResponse.json(updated);
}

export async function GET() {
  const withdrawals = await prisma.withdrawal.findMany();
  return NextResponse.json(withdrawals);
}
