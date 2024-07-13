import styles from "./Carrosel.module.css";
import imgTeste from "./player.png";
// import videosData from "../../json/db.json";
import { Link } from "react-router-dom";

const Carrosel = () => {
  return (
    <section className={styles.carrosel}>
      <div className={styles.conteudo_carrosel}>
        <div className={styles.descricoes}>
          <h2>Front End</h2>
          <h3>Seo Com React</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vel
            repellendus sapiente laboriosam eum accusamus nostrum aut vitae
            soluta assumenda voluptatibus, blanditiis, iure accusantium, officia
            quis? Aspernatur laudantium esse vero!
          </p>
        </div>

        <article className={styles.imagem}>
          <Link to="novoVideo/ss">
            <img src={imgTeste} alt="teste" />
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Carrosel;
