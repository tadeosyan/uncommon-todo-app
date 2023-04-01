import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainLayout = lazy(() => import("../MainLayout"));
const ListItem = lazy(() => import("../MainLayout/ListItem"));

const Router = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="todo/:id" element={<ListItem />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
