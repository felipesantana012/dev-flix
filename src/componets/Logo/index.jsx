import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <p>
        Dev<strong>Flix</strong>
      </p>
    </Link>
  );
};

export default Logo;
