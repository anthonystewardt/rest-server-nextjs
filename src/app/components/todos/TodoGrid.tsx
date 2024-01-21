
import prisma from '@/app/lib/prisma';
import { WidgetItem } from '..';
import { NewTodo } from './NewTodo';



export const TodoGrid = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  });

  return (
    <>
      <div className="w-full justify-between pl-10 mb-5">
        <NewTodo />
      </div>
      <div className='grid grid-cols-6  w-full gap-5'>
        {
          todos.map((todo) => {
            return (
              <WidgetItem key={todo.id} id={todo.id} complete={todo.complete} description={todo.description}  />
              )
            })
        }
      </div>
    </>
  );
}
