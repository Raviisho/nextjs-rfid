import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const keys = await prisma.tarj_nfc.findMany();
  return NextResponse.json(keys);
}

export async function POST(request) {
  const { data, state } = await request.json();
  const newKey = await prisma.tarj_nfc.create({
    data: {
      data,
      state,
    },
  });
  return NextResponse.json(newKey);
}