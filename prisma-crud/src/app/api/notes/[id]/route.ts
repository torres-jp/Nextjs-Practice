import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  try {
    const notes = await prisma.note.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (!notes)
      return NextResponse.json({ message: "No notes found", status: 404 });

    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const noteDelete = await prisma.note.delete({
    where: {
      id: Number(params.id),
    },
  });

  if (!noteDelete)
    return NextResponse.json({ message: "Note not found", status: 404 });

  return NextResponse.json(noteDelete);
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const { title, content } = await req.json();

    const noteUpdate = await prisma.note.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        content,
      },
    });

    if (!noteUpdate)
      return NextResponse.json({ message: "Note not found", status: 404 });
    return NextResponse.json(noteUpdate);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
