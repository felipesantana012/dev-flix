import gifPagniaNaoEncontrada from "./pagina nao encontrada.gif";
import styles from "./NaoEncontrada.module.css";

const NaoEncotrada = () => {
  return (
    <article className={styles.naoEncotrada}>
      <img src={gifPagniaNaoEncontrada} alt="" />
      <h1>Pagnia não encontrada</h1>
    </article>
  );
};

export default NaoEncotrada;
