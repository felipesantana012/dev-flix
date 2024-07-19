//FUNCOES UTILIZANDO O ARQUIVO LOCAL

import videos from "./db.json";

const findCategory = (categoria) => {
  return videos.videos.find((video) => video.categoria === categoria);
};

export const fetchVideos = () => {
  return videos.videos;
};

export const addVideoCategoria = (newVideo, qualCategoria) => {
  const category = findCategory(qualCategoria);
  if (category) {
    category.itens.push(newVideo);
  } else {
    throw new Error("Categoria não encontrada.");
  }
};

export const deleteVideoCategoria = (categoria, titulo) => {
  const category = findCategory(categoria);
  if (category) {
    category.itens = category.itens.filter((item) => item.titulo !== titulo);
  } else {
    throw new Error("Categoria não encontrada.");
  }
};
