import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <p>
          Dev<strong>Flix</strong>
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
