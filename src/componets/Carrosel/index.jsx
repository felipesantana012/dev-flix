import styles from "./Carrosel.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useVideosData from "../../hooks/useVideosData";
import NomeCategoria from "../NomeCategoria";

const Carrosel = () => {
  const data = useVideosData();

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className={styles.carroselContainer}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${item.capa})` }}
            className={styles.carroselElemento}
          >
            <div className={styles.conteudo_carrosel}>
              <div className={styles.descricoes}>
                <NomeCategoria cor={item.corPrincipal}>
                  {item.categoria}
                </NomeCategoria>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>

              <article className={styles.imagem}>
                <Link to={item.link}>
                  <img src={item.capa} alt="teste" />
                </Link>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carrosel;
