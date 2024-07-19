import styles from "./Card.module.css";
import BotaoDeAcoes from "../BotaoDeAcoes";
import { Link } from "react-router-dom";

const Card = ({ capa, titulo, link, categoria, onDelete }) => {
  const handleDelete = () => {
    onDelete(categoria, titulo);
  };

  return (
    <div className={styles.card}>
      <article className={styles.imagem}>
        <Link to={link}>
          <img src={capa} alt={titulo} />
        </Link>
        <h3>{titulo}</h3>
      </article>

      <div className={styles.btns}>
        <BotaoDeAcoes icone="lixeira" onClick={handleDelete}>
          Lixeira
        </BotaoDeAcoes>
        <BotaoDeAcoes icone="editar">Editar</BotaoDeAcoes>
      </div>
    </div>
  );
};

export default Card;
