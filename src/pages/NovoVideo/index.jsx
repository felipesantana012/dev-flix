import styles from "./NovoVideo.module.css";
import Botao from "../../componets/Botao";
import Input from "../../componets/Input";
import Select from "../../componets/Select";

const NovoVideo = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.descricao}>
        <h1>Novo Video</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>

      <form action="" className={styles.fomulario}>
        <h2>Criar Card</h2>
        <div className={styles.inputs}>
          <Input placeholder="Informe um título">Titulo</Input>
          <Select>Categoria</Select>
        </div>
        <div className={styles.inputs}>
          <Input placeholder="o link é obrigatório">Imagem</Input>
          <Input placeholder="digite o link do video">Video</Input>
        </div>
        <div className={styles.inputDescricao}>
          <label htmlFor="">Descrição</label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="8"
            placeholder="sobre o que é esse vídeo?"
          ></textarea>
        </div>

        <div className={styles.btns}>
          <Botao type="submit" cor={"#2271d1"} shadow="none">
            Guardar
          </Botao>
          <Botao type="reset" shadow="none" cor="#ffffff">
            Limpar
          </Botao>
        </div>
      </form>
    </div>
  );
};

export default NovoVideo;
