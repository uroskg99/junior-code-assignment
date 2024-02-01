import { NextApiRequest } from "next";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await prisma.todoItem.create({
    data: {
      ...body,
    },
  });

  if (!result)
    return Response.json({
      message: "error",
      status: 500,
    });

  return Response.json({ message: "ok", status: 200, data: result });
}

export async function GET(req: Request) {
  const result = await prisma.todoItem.findMany();
  return Response.json({ message: "ok", status: 200, data: result });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const todoItem = await prisma.todoItem.delete({
      where: {
        id,
      },
    });
    return Response.json({ message: "ok", todoItem });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request) {
  const { id, isDone } = await req.json();
  try {
    const todoItem = await prisma.todoItem.update({
      where: {
        id,
      },
      data: {
        isDone,
      },
    });
    return Response.json({ message: "OK", todoItem });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
