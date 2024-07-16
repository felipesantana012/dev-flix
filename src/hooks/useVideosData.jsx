import { useState, useEffect } from "react";
import { fetchVideos } from "../services/api.jsx";

const useVideosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const transformData = async () => {
      const videosData = await fetchVideos();
      const todosItens = [];
      videosData.forEach((element) => {
        element.itens.forEach((item) => {
          todosItens.push({
            ...item,
            categoria: element.categoria,
            corPrincipal: element.corPrincipal,
          });
        });
      });
      setData(todosItens);
    };

    transformData();
  }, []);

  return data;
};

export default useVideosData;
