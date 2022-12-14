import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "../pages";

const TodoPage = lazy(() => import('../pages/Todos/TodoPage'))

export const MainRouter = () => {
  return (
    <div className="h-center p-r">
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path='/:categoryID' element={<TodoPage/>} />
      </Routes>
    </div>
  );
};

