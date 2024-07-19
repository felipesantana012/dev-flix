import videos from "../json/db.json";
const tempo = 600;

// Função para buscar vídeos
export const fetchVideos = async () => {
  await new Promise((resolve) => setTimeout(resolve, tempo));
  return videos.videos;
};

// Função auxiliar para encontrar uma categoria por nome
const findCategory = (videos, categoria) => {
  return videos.find((video) => video.categoria === categoria);
};

// Função auxiliar para atualizar uma categoria no array de vídeos
const updateCategory = (videos, categoria, updater) => {
  const category = findCategory(videos, categoria);
  if (category) {
    updater(category);
    return true;
  }
  return false;
};

// Função para adicionar um novo vídeo a uma categoria
export const addVideoCategoria = async (newVideo, qualCategoria) => {
  await new Promise((resolve) => setTimeout(resolve, tempo));

  const categoryUpdated = updateCategory(
    videos.videos,
    qualCategoria,
    (category) => {
      category.itens.push(newVideo);
    }
  );

  if (!categoryUpdated) {
    throw new Error("Categoria não encontrada.");
  }
};

// Função para deletar um vídeo de uma categoria
export const deleteVideoCategoria = async (categoria, titulo) => {
  await new Promise((resolve) => setTimeout(resolve, tempo));

  const categoryUpdated = updateCategory(
    videos.videos,
    categoria,
    (category) => {
      category.itens = category.itens.filter((item) => item.titulo !== titulo);
    }
  );

  if (!categoryUpdated) {
    throw new Error("Categoria não encontrada.");
  }
};

// Função para atualizar um vídeo de uma categoria
export const updateVideoCategoria = async (categoria, updatedVideo) => {
  await new Promise((resolve) => setTimeout(resolve, tempo));

  const categoryUpdated = updateCategory(
    videos.videos,
    categoria,
    (category) => {
      const index = category.itens.findIndex(
        (item) => item.id === updatedVideo.id
      );
      if (index !== -1) {
        category.itens[index] = updatedVideo;
      } else {
        throw new Error("Vídeo não encontrado na categoria.");
      }
    }
  );

  if (!categoryUpdated) {
    throw new Error("Categoria não encontrada.");
  }
};
