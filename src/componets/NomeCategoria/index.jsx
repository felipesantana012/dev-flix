import styles from "./NomeCategoria.module.css";

const NomeCategoria = ({ children, cor }) => {
  return (
    <>
      <h2 className={styles.nomeCategoria} style={{ background: cor }}>
        {children}
      </h2>
    </>
  );
};

export default NomeCategoria;
