import prisma from '@/app/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take"));
  const skip = Number(searchParams.get("skip"));


  if (isNaN(skip)) {
    return NextResponse.json({
      message: "Invalid skip"
    }, {
      status: 400
    })
  }

  if (isNaN(take)) {
    return NextResponse.json({
      message: "Invalid take"
    }, {
      status: 400
    })
  }
  let todos;
  if (take && skip) {
    todos = await prisma.todo.findMany({
      take,
      skip,
    });
  } else {
    todos = await prisma.todo.findMany();
  }

  return NextResponse.json({
    todos
  })
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)
});


export async function POST(request: Request) {
 try {
    const body = await postSchema.validate(await request.json());

    const todo = await prisma.todo.create({
      data: body,
    });

    return NextResponse.json({
      message: "Todo created",
      todo,
    });
 } catch (error) {
    return NextResponse.json({
      message: error
    }, {
      status: 400
    })
 }
}

export async function DELETE(request: Request) {
  
  // actualizar todos los todos a complete = true
  const todos = await prisma.todo.updateMany({
    data: {
      complete: false
    }
  });
  
  return NextResponse.json({
    message: "Todos updated",
    todos
  });
}