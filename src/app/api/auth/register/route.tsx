import prisma from "@/libs/prisma";
import { Role } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface User {
  name: string;
  email: string;
  password: string;
  role: Role;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export async function POST(req: NextRequest) {
  const { name, email, password, role, isActive } = await req.json();
  try {
    const user: User = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: role || Role.USER || Role.ADMIN || Role.SUPERADMIN || Role.KASIR,
        isActive,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
