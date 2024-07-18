import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";
import NovoVideo from "./pages/NovoVideo";
import { VideoProvider } from "./context/VideoContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <VideoProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />}></Route>
            <Route path="novoVideo" element={<NovoVideo />}></Route>
            <Route path="*" element={<NaoEncontrada />}></Route>
          </Route>
        </Routes>
      </VideoProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
