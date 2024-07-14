import styles from "./Carrosel.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import videosData from "../../json/db.json";

const Carrosel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(videosData.videos);
  }, []);

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className={styles.carroselContainer}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ backgroundImage: `url(${item.capa})` }}
            className={styles.carroselElemento}
          >
            <div className={styles.conteudo_carrosel}>
              <div className={styles.descricoes}>
                <h2>{item.categoria}</h2>
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
