import styles from "./Card.module.css";
import BotaoDeAcoes from "../BotaoDeAcoes";

const Card = () => {
  return (
    <div className={styles.card}>
      <article className={styles.imagem}>
        <img
          src={
            "https://i.pinimg.com/564x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg"
          }
          alt=""
        />
        <h3>Testando</h3>
      </article>

      <div className={styles.btns}>
        <BotaoDeAcoes icone="lixeira">Lixeira</BotaoDeAcoes>
        <BotaoDeAcoes icone="editar">Editar</BotaoDeAcoes>
      </div>
    </div>
  );
};

export default Card;
