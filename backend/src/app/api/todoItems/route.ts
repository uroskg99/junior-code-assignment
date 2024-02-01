import prisma from "../../../../lib/prisma";

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
