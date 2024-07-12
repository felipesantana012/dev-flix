import Footer from "../../componets/Footer";
import Header from "../../componets/Header";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default PaginaBase;
