import Footer from "../../componets/Footer";
import Header from "../../componets/Header";
import { Outlet } from "react-router-dom";
import styles from "./PaginaBase.module.css";

const PaginaBase = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default PaginaBase;
