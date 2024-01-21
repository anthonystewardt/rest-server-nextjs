import prisma from '@/app/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface SegmentI {
  params: {
    id: string
  }
}


export async function GET(request: Request, segments: SegmentI) {

  const { id } = segments.params;
  const todo = await prisma.todo.findFirst({
    where: {
      id
    }
  })

  if (!todo) {
    return NextResponse.json({
      message: "Not found"
    }, {
      status: 404
    })
  }

  return NextResponse.json({
    message: "Todo found",
    todo
  })
}


export async function PUT(request: Request, segments: SegmentI) {
  const { id } = segments.params;

  // check if todo exists
  const todoFind = await prisma.todo.findFirst({
    where: {
      id
    }
  })

  if (!todoFind) {
    return NextResponse.json({
      message: "Not found"
    }, {
      status: 404
    })
  }

  const body = await request.json();

  const todo = await prisma.todo.update({
    where: {
      id
    },
    data: body
  });

  return NextResponse.json({
    message: "Todo updated",
    todo
  })
}
