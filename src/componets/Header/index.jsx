import Botao from "../Botao";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <p>
          Dev<strong>Flix</strong>
        </p>
      </Link>

      <ul>
        <li>
          <Link to="/">
            <Botao cor="#2271d1">Home</Botao>
          </Link>
        </li>

        <li>
          <Link to="/novoVideo">
            <Botao shadow="none" cor="#ffffff">
              Novo Vídeo
            </Botao>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
