import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const anggotas = await prisma.anggota.findMany();
    return NextResponse.json({ anggotas }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const anggota = await prisma.anggota.create({
      data: {
        name: body.name,
        email: body.email,
        username: body.username,
        alamat: body.alamat,
        desa: body.desa,
        kecamatan: body.kecamatan,
        kota: body.kota,
        provinsi: body.provinsi,
        kodePos: body.kodePos,
        tglLahir: body.tglLahir,
        tempatLahir: body.tempatLahir,
        pendidikan: body.pendidikan,
        pekerjaan: body.pekerjaan,
        agama: body.agama,
        gender: body.gender,
        status: body.status,
        pendapatan: body.pendapatan,
        noRek: body.noRek,
        bank: body.bank,
        cabang: body.cabang,
        noKtp: body.noKtp,
        noKk: body.noKk,
        noNpwp: body.noNpwp,
        noTelp: body.noTelp,
        noHp: body.noHp,
        noReferensi: body.noReferensi,
        password: body.password,
        role: body.role,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
        deleted: false,
        deletedReason: "",
        user: {
          connect: {
            id: body.userId,
          },
        },
      },
    });
    return NextResponse.json({ anggota }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
