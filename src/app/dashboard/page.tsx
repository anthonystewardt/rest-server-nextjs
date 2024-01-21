export const dynamic = "force-dynamic";
export const revalidate = 0;
import React from "react";
import { TodoGrid } from "../components/todos/TodoGrid";

const DashboardPage = () => {
  return (
    <div className=" w-full">
      <TodoGrid />
      {/* <WidgetItem />
      <WidgetItem />
      <WidgetItem /> */}
    </div>
  );
};

export default DashboardPage;
