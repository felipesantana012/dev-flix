import NomeCategoria from "../NomeCategoria";
import styles from "./Categorias.module.css";
import Card from "../Card";
import useVideos from "../../hooks/useVideos";

const Categorias = () => {
  const { categories, deleteVideo } = useVideos();
  return (
    <section className={styles.container}>
      {categories.map((item, index) => (
        <div key={index} className={styles.containerCategoria}>
          <NomeCategoria cor={item.corPrincipal}>
            {item.categoria}
          </NomeCategoria>
          <div className={styles.cards}>
            {item.itens &&
              item.itens.map((element, idx) => (
                <Card
                  key={idx}
                  capa={element.capa}
                  link={element.link}
                  titulo={element.titulo}
                  categoria={item.categoria}
                  onDelete={deleteVideo}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categorias;
