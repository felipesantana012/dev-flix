// services/api.jsx
import axios from "axios";

const URL_API = "http://localhost:3000/videos";

export const fetchVideos = async () => {
  try {
    const response = await axios.get(URL_API);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vídeos da API:", error.message);
    throw new Error("Erro ao buscar vídeos da API");
  }
};

export const createVideo = async (videoData) => {
  try {
    await axios.post(URL_API, videoData);
  } catch (error) {
    console.error("Erro ao criar vídeo na API:", error.message);
    throw new Error("Erro ao criar vídeo na API");
  }
};
