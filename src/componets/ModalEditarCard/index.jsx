import styles from "./ModalEditarCard.module.css";
import useVideos from "../../hooks/useVideos";
import Botao from "../Botao";
import { useEffect, useState } from "react";

const ModalEditarCard = ({ item, onClose }) => {
  const { categories, updateVideo } = useVideos();
  const [formData, setFormData] = useState({ ...item });

  useEffect(() => {
    setFormData({ ...item });
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      titulo: "",
      categoria: "",
      capa: "",
      link: "",
      descricao: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVideo(formData.categoria, formData);
    onClose();
  };

  return (
    <section className={styles.modalEditarCard}>
      <form onSubmit={handleSubmit}>
        <h2>Editar card:</h2>
        <label htmlFor="titulo" className={styles.estilo_inputs}>
          Titulo
          <input
            type="text"
            className={styles.input_item}
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Informe um título"
          />
        </label>

        <label htmlFor="categoria" className={styles.estilo_inputs}>
          Categorias
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.categoria}>
                {category.categoria}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="capa" className={styles.estilo_inputs}>
          Imagem
          <input
            type="text"
            className={styles.input_item}
            name="capa"
            value={formData.capa}
            onChange={handleChange}
            placeholder="Informe link da Imagem"
          />
        </label>

        <label htmlFor="link" className={styles.estilo_inputs}>
          Video
          <input
            type="text"
            className={styles.input_item}
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Informe link do video"
          />
        </label>

        <div className={styles.inputDescricao}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            cols="1"
            rows="3"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Sobre o que é esse vídeo?"
            className={styles.textarea}
          ></textarea>
        </div>

        <div className={styles.btns}>
          <Botao cor={"#2271d1"} shadow="none" type="submit">
            Guardar
          </Botao>
          <Botao shadow="none" cor="#ffffff" type="button" onClick={onClose}>
            Sair
          </Botao>
        </div>

        <button type="button" className={styles.fechar} onClick={onClose}>
          <i>X</i>
        </button>
      </form>
    </section>
  );
};

export default ModalEditarCard;
