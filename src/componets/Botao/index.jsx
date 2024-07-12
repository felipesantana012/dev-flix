import styles from "./Botao.module.css";

const Botao = ({ children, cor, shadow = `0px 0px 10px ${cor} inset` }) => {
  return (
    <button
      className={styles.btn}
      style={{
        border: `2px solid ${cor}`,
        color: cor,
        boxShadow: shadow,
      }}
    >
      {children}
    </button>
  );
};

export default Botao;
