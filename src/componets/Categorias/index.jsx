import NomeCategoria from "../NomeCategoria";
import styles from "./Categorias.module.css";
import Card from "../Card";

const Categorias = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerCategoria}>
        <NomeCategoria>Titulo</NomeCategoria>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.containerCategoria}>
        <NomeCategoria>Titulo</NomeCategoria>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Categorias;
