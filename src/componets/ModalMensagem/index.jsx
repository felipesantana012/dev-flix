import React from "react";
import styles from "./ModalMensagem.module.css";

const ModalMensagem = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <h2>Dados enviados com sucesso!</h2>
        <button className={styles.closeBtn} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalMensagem;
