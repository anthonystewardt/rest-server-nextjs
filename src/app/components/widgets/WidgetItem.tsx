"use client";
import React from 'react';
import { IoCheckboxOutline, IoSquare } from 'react-icons/io5';
import styles from "../../styles/TodoStyle.module.css"
import { Todo } from '@prisma/client';
import * as api from '@/app/helpers/todos';
import { useRouter } from 'next/navigation';
import { toggleTodoServer } from '@/app/actions/todo-actions';


interface Prop {
  id: string;
  description: string;
  complete: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}


export const WidgetItem = ({ complete, description, id }: Prop) => {

  const router = useRouter();

  const toggleTodo = async () => {
    const todo = await api.updateTodo && api.updateTodo(id, !complete);
    router.refresh();
  }

  return (
    <div
      className={`md:col-span-2 border-dashed border-gray-600 border-2 ${
        complete ? styles.todoDone : styles.todoPending
      }`}
    >
      <div className="h-full py-3 px-6 space-y-6 rounded-xl  ">
        <div className="flex items-center gap-10 w-full">
          <div className="">
            {complete ? (
              <IoCheckboxOutline
                size={30}
                // onClick={() => toggleTodo()}
                onClick={() => toggleTodoServer(id, !complete)}
              />
            ) : (
              <IoSquare
                size={30}
                // onClick={() => toggleTodo()}
                onClick={() => toggleTodoServer(id, !complete)}
              />
            )}
          </div>
          <h5 className="text-xl text-gray-600 text-center">{description}</h5>
        </div>
      </div>
    </div>
  );
}


