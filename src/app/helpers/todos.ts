import { Todo } from "@prisma/client"



export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const body = { complete };

  const response = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}


// createodo
export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const response = await fetch(`/api/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export const deleteCompleteTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`/api/todos`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}