// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const {
      email,
      password,
      username,
      phone,
      gender,
      address,
      country,
      referralCode,
    } = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userReferralCode = `REF-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        phone,
        gender,
        address,
        country,
        referralCode: userReferralCode,
        ...(referralCode && {
          referredBy: {
            connect: { referralCode },
          },
        }),
      },
    });

    const wallet = await prisma.wallet.create({
      data: {
        userId: user.id,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          referralCode: user.referralCode,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
