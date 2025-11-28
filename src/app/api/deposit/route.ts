import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const updated = await prisma.deposit.create({
    data: body,
  });

  return NextResponse.json(updated);
}

export async function GET() {
  const deposits = await prisma.deposit.findMany();
  return NextResponse.json(deposits);
}
