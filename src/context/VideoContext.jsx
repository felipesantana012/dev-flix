import React, { createContext, useState, useEffect } from "react";
import { fetchVideos, addVideoCategoria } from "../services/api.jsx";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [todosItens, setTodosItens] = useState([]);

  const buscarTodos = (data) => {
    const arrayTodosItens = [];
    data.forEach((element) => {
      if (element.itens && Array.isArray(element.itens)) {
        element.itens.forEach((item) => {
          arrayTodosItens.push({
            ...item,
            categoria: element.categoria,
            corPrincipal: element.corPrincipal,
          });
        });
      }
    });
    return arrayTodosItens;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVideos();
      setCategories(data);
    };

    const fetchTodosItens = async () => {
      const data = await fetchVideos();
      const arrayTodosItens = buscarTodos(data);
      setTodosItens(arrayTodosItens);
    };

    fetchTodosItens();
    fetchData();
  }, []);

  const addVideo = async (newVideo, qualCategoria) => {
    await addVideoCategoria(newVideo, qualCategoria);
    const data = await fetchVideos();
    const arrayTodosItens = buscarTodos(data);
    setTodosItens(arrayTodosItens);
    setCategories(data);
  };

  return (
    <VideoContext.Provider value={{ categories, todosItens, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
