import styles from "./BotaoDeAcoes.module.css";
import iconeLixeira from "./lixeira.png";
import iconeLapis from "./lapis.png";

const BotaoDeAcoes = ({ children, icone = "lixeira" }) => {
  const iconeSrc = icone === "lixeira" ? iconeLixeira : iconeLapis;
  return (
    <button className={styles.botao}>
      <img src={iconeSrc} alt="iconeLixeira" />
      <p>{children}</p>
    </button>
  );
};

export default BotaoDeAcoes;
