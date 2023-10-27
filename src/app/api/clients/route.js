import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const clientes = await prisma.clients.findMany();
  return NextResponse.json(clientes);
}

export async function POST(request) {
  const jsonData = await request.json();

  const newClient = await prisma.clients.create({
    data: jsonData,
  });

  return NextResponse.json(newClient);
}
