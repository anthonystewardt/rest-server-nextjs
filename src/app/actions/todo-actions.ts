"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";



export const toggleTodoServer = async (id: string, complete: boolean) => {
  const todoFind = await prisma.todo.findFirst({
    where: {
      id: id
    }
  })

  // if not exist todoFind
  if (!todoFind) {
    return {
      success: false,
      message: "Todo not found"
    }
  }

  const todo = await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      complete: complete
    }
  })

  revalidatePath("/dashboard");
  return {
    todo
  }
}


export const createTodoServer = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        description: description
      }
    })

    revalidatePath("/dashboard");
    return {
      todo
    }

  } catch (error) {
    return {
      success: false,
      message: "Error creating todo"
    }
  }
}








