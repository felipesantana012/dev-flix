import styles from "./Botao.module.css";

const Botao = ({
  children,
  cor,
  shadow = `0px 0px 10px ${cor} inset`,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      className={styles.btn}
      style={{
        border: `2px solid ${cor}`,
        color: cor,
        boxShadow: shadow,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Botao;
