import React, { createContext, useState, useEffect } from "react";
import { useLoading } from "./LoadingContext.jsx";

import { fetchVideos } from "../services/api.jsx";
import {
  addVideoCategoria,
  deleteVideoCategoria,
} from "../services/videoService.jsx";

// import {
//   fetchVideos,
//   addVideoCategoria,
//   deleteVideoCategoria,
// } from "../json/apiLocal.jsx";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [todosItens, setTodosItens] = useState([]);
  const { showLoading, hideLoading } = useLoading();

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
      showLoading();
      try {
        const data = await fetchVideos();
        setCategories(data);
      } finally {
        hideLoading();
      }
    };

    const fetchTodosItens = async () => {
      showLoading();
      try {
        const data = await fetchVideos();
        const arrayTodosItens = buscarTodos(data);
        setTodosItens(arrayTodosItens);
      } finally {
        hideLoading();
      }
    };

    fetchTodosItens();
    fetchData();
  }, []);

  const addVideo = async (newVideo, qualCategoria) => {
    showLoading();
    try {
      await addVideoCategoria(newVideo, qualCategoria);
      const data = await fetchVideos();
      const arrayTodosItens = buscarTodos(data);
      setTodosItens(arrayTodosItens);
      setCategories(data);
    } finally {
      hideLoading();
    }
  };

  const deleteVideo = async (categoria, titulo) => {
    showLoading();
    try {
      await deleteVideoCategoria(categoria, titulo);
      const data = await fetchVideos();
      setCategories(data);
    } finally {
      hideLoading();
    }
  };
  return (
    <VideoContext.Provider
      value={{ categories, todosItens, addVideo, deleteVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};
