import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.employee.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true
      },
      {
        description: "Piedra del tiempo",
      },
      {
        description: "Priedra del espacio",
      }
    ]
  });

  const employees = await prisma.employee.createMany({
    data: [
      {
        name: "Juan",
        isAdmin: true,
        lastName: "Perez",
      },
      {
        name: "Pedro",
        isAdmin: false,
        lastName: "Santos",
      }
    ]
  })

  console.log({
    employees
  })

  // const todo = await prisma.todo.create({
  //   data: {
  //     description: "Hello World"
  //   }
  // });

  // console.log(todo);

  return NextResponse.json({
    message: "Seed execute"
  });
}