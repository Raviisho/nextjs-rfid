import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const tarj_nfc = await prisma.tarj_nfc.findMany({
        where: {
            clientId : Number(params.id)
        }
    })
    const cliente = await prisma.clients.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    const data = {
        cliente,
        tarj_nfc
    }
    return NextResponse.json(data)
}

export async function PUT(request, {params}){

    const data = await request.json()
    const clienteModificado = await prisma.clients.update({
        where:{
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(clienteModificado)
}

export async function DELETE(request, {params}){
    try {
        const clienteEliminado = await prisma.clients.delete({
            where:{
                id: Number(params.id)
            }
        })
        return NextResponse.json(clienteEliminado)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}