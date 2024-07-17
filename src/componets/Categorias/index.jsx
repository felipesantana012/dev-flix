import NomeCategoria from "../NomeCategoria";
import styles from "./Categorias.module.css";
import Card from "../Card";
import { fetchVideos } from "../../services/api.jsx";
import useFetchData from "../../hooks/useFetchData.jsx";

const Categorias = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  if (!data || !Array.isArray(data)) {
    return <p>Sem dados disponíveis para exibição</p>;
  }
  return (
    <section className={styles.container}>
      {data.map((item, index) => (
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
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categorias;
