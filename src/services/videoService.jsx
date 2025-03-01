import { fetchVideos, updateCategory } from "./api.jsx";

//Encontra uma categoria de vídeo específica dentro de um array de vídeos.
const findCategory = (videos, categoryName) => {
  return videos.find((video) => video.categoria === categoryName);
};

//Adiciona um novo vídeo à lista de itens de uma categoria existente.
const addVideoToCategory = (category, newVideo) => {
  category.itens.push(newVideo);
};

//Remove um vídeo da lista de itens de uma categoria existente, usando o id do vídeo.
const removeVideoFromCategory = (category, titulo) => {
  category.itens = category.itens.filter((item) => item.titulo !== titulo);
};

// Atualiza um vídeo existente na categoria.
const updateVideoInCategory = (category, updatedVideo) => {
  const index = category.itens.findIndex((item) => item.id === updatedVideo.id);
  if (index !== -1) {
    category.itens[index] = updatedVideo;
  } else {
    throw new Error("Vídeo não encontrado na categoria.");
  }
};

//-------------------FUNÇÕES----------------

// Função para adicionar um novo vídeo a uma categoria
export const addVideoCategoria = async (newVideo, qualCategoria) => {
  const videos = await fetchVideos();
  const category = findCategory(videos, qualCategoria);

  if (category) {
    addVideoToCategory(category, newVideo);
    await updateCategory(category.id, category);
  } else {
    throw new Error("Categoria não encontrada.");
  }
};

// Função para deletar um vídeo de uma categoria
export const deleteVideoCategoria = async (categoria, titulo) => {
  const videos = await fetchVideos();
  const category = findCategory(videos, categoria);
  if (category) {
    removeVideoFromCategory(category, titulo);
    await updateCategory(category.id, category);
  } else {
    throw new Error("Categoria não encontrada.");
  }
};

// Função para atualizar um vídeo de uma categoria
export const updateVideoCategoria = async (categoria, updatedVideo) => {
  const videos = await fetchVideos();
  const category = findCategory(videos, categoria);
  if (category) {
    updateVideoInCategory(category, updatedVideo);
    await updateCategory(category.id, category);
  } else {
    throw new Error("Categoria não encontrada.");
  }
};
