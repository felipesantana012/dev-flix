import styles from "./Footer.module.css";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
