import { useEffect, useState } from "react";
import apiVideos from "../json/db.json";

const useVideosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const videosData = apiVideos.videos;
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
  }, []);

  return data;
};

export default useVideosData;
