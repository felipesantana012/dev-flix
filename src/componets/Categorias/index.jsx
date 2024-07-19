import NomeCategoria from "../NomeCategoria";
import styles from "./Categorias.module.css";
import Card from "../Card";
import useVideos from "../../hooks/useVideos";
import ModalEditarCard from "../ModalEditarCard";
import { useState } from "react";

const Categorias = () => {
  const { categories, deleteVideo } = useVideos();
  const [editingItem, setEditingItem] = useState(null);

  const handleEdit = (item, categoria) => {
    setEditingItem({ ...item, categoria });
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCard(null);
  };

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
                  onEdit={() => handleEdit(element, item.categoria)}
                />
              ))}
          </div>
        </div>
      ))}
      {editingItem && (
        <ModalEditarCard
          item={editingItem}
          onClose={() => setEditingItem(null)}
        />
      )}
    </section>
  );
};

export default Categorias;
