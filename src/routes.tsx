import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositorio/:repositorio" element={<Repositorio />} />
    </Routes>
  );
};
