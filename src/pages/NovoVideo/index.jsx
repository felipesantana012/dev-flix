import styles from "./NovoVideo.module.css";
import Botao from "../../componets/Botao";
import Input from "../../componets/Input";
import Select from "../../componets/Select";
import { useState } from "react";
import ModalMensagem from "../../componets/ModalMensagem";
import useVideos from "../../hooks/useVideos";

const NovoVideo = () => {
  const { categories, addVideo } = useVideos();

  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    capa: "",
    link: "",
    descricao: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.titulo) errors.titulo = "O campo título é obrigatório.";
    if (!formData.categoria)
      errors.categoria = "O campo categoria é obrigatório.";
    if (!formData.capa) errors.capa = "O campo imagem é obrigatório.";
    if (!formData.link) errors.link = "O campo link vídeo é obrigatório.";
    if (!formData.descricao)
      errors.descricao = "O campo descrição é obrigatório.";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const resetForm = () => {
    setFormData({
      titulo: "",
      categoria: "",
      capa: "",
      link: "",
      descricao: "",
    });
    setFormErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    let qualCategoria = "";
    if (formData.categoria === "Front-End") {
      qualCategoria = "Front-End";
    } else {
      qualCategoria = "Back-End";
    }

    try {
      await addVideo(formData, qualCategoria);
      setShowModal(true);
      resetForm();
    } catch (error) {
      console.error("Erro ao criar vídeo:", error);
      alert("Ocorreu um erro ao criar o vídeo. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.descricao}>
        <h1>Novo Video</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <h2>Criar Card</h2>
        <div className={styles.inputs}>
          <Input
            name="titulo"
            placeholder="Informe um título"
            value={formData.titulo}
            onChange={handleChange}
            error={formErrors.titulo}
          >
            Titulo
          </Input>
          <Select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            options={categories.map((category) => (
              <option key={category.id} value={category.categoria}>
                {category.categoria}
              </option>
            ))}
            error={formErrors.categoria}
          >
            Categoria
          </Select>
        </div>
        <div className={styles.inputs}>
          <Input
            name="capa"
            placeholder="O link é obrigatório"
            value={formData.capa}
            onChange={handleChange}
            error={formErrors.capa}
          >
            Imagem
          </Input>
          <Input
            name="link"
            placeholder="Digite o link do vídeo"
            value={formData.link}
            onChange={handleChange}
            error={formErrors.link}
          >
            Video
          </Input>
        </div>
        <div className={styles.inputDescricao}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            cols="20"
            rows="8"
            placeholder="Sobre o que é esse vídeo?"
            value={formData.descricao}
            onChange={handleChange}
            className={`${styles.textarea} ${
              formErrors.descricao ? styles.error : ""
            }`}
          ></textarea>
          {formErrors.descricao && (
            <p className={styles.errorMessage}>{formErrors.descricao}</p>
          )}
        </div>

        <div className={styles.btns}>
          <Botao cor={"#2271d1"} shadow="none" type="submit">
            Guardar
          </Botao>
          <Botao shadow="none" cor="#ffffff" type="button" onClick={resetForm}>
            Limpar
          </Botao>
        </div>
      </form>

      {showModal && <ModalMensagem onClose={closeModal} />}
    </div>
  );
};

export default NovoVideo;
