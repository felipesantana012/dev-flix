import styles from "./BotaoDeAcoes.module.css";
import iconeLixeira from "./lixeira.png";
import iconeLapis from "./lapis.png";

const BotaoDeAcoes = ({ children, icone = "lixeira", onClick }) => {
  const iconeSrc = icone === "lixeira" ? iconeLixeira : iconeLapis;
  return (
    <button className={styles.botao} onClick={onClick}>
      <img src={iconeSrc} alt="iconeLixeira" />
      <p>{children}</p>
    </button>
  );
};

export default BotaoDeAcoes;
