import { Route, Routes } from "react-router-dom";
import { CategoryPage, TodoPage } from "../pages";

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

