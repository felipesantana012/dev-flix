// import axios from "axios";

// const API_URL = "http://localhost:3000/videos";

// const API_URL =
//   "https://my-json-server.typicode.com/felipesantana012/git-api-DevFlix/videos";

// export const fetchVideos = async () => {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   return data;
// };

// // Função para adicionar um novo vídeo à alguma categoria de videos
// export const addVideoCategoria = async (newVideo, qualCategoria) => {
//   try {
//     const response = await axios.get(API_URL);
//     const videos = response.data;
//     console.log("videos", videos);

//     const minhaCategory = videos.find(
//       (video) => video.categoria === qualCategoria
//     );
//     console.log("Categoria", minhaCategory);

//     if (minhaCategory) {
//       minhaCategory.itens.push(newVideo);

//       // Enviar a atualização para o servidor
//       await axios.put(`${API_URL}/${minhaCategory.id}`, minhaCategory, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     } else {
//       throw new Error("Categoria não encontrada.");
//     }
//   } catch (error) {
//     console.error("Error adding video:", error.message);
//     throw error;
//   }
// };

//FUNCOES UTILIZANDO O ARQUIVO LOCAL
import videos from "../json/db.json";

// Função para buscar vídeos
export const fetchVideos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(videos.videos), 500);
  });
};

// Função para adicionar um novo vídeo a uma categoria
export const addVideoCategoria = (newVideo, qualCategoria) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const category = videos.videos.find(
          (video) => video.categoria === qualCategoria
        );
        if (category) {
          category.itens.push(newVideo);
          resolve();
        } else {
          reject(new Error("Categoria não encontrada."));
        }
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};
