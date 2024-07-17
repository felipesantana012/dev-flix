import { useState, useEffect } from "react";
import { fetchVideos } from "../services/api";

const useVideosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const transformData = async () => {
      try {
        const videosData = await fetchVideos();
        if (!videosData) {
          console.error("Dados de vídeos não encontrados.");
          return;
        }

        const todosItens = [];

        videosData.forEach((element) => {
          if (element.itens && Array.isArray(element.itens)) {
            element.itens.forEach((item) => {
              todosItens.push({
                ...item,
                categoria: element.categoria,
                corPrincipal: element.corPrincipal,
              });
            });
          }
        });

        setData(todosItens);
      } catch (err) {
        console.error("Erro ao transformar dados:", err);
      }
    };

    transformData();
  }, []);

  return data;
};

export default useVideosData;
