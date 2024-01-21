export const dynamic = "force-dynamic";
export const revalidate = 0;
import { WidgetItem } from "@/app/components";
import { TodoGrid } from "@/app/components/todos/TodoGrid";
import React from "react";

const RestTodoPage = () => {
  return (
    <div className=" w-full">
      <TodoGrid />
      {/* <WidgetItem />
      <WidgetItem />
      <WidgetItem /> */}
    </div>
  );
};

export default RestTodoPage;
