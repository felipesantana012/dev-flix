import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";
import NovoVideo from "./pages/NovoVideo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />}></Route>
          <Route path="novoVideo" element={<NovoVideo />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
