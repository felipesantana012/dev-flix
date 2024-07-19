import axios from "axios";

// const API_URL =
//   "https://my-json-server.typicode.com/felipesantana012/git-api-DevFlix/videos";
const API_URL = "http://localhost:3000/videos";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados.", error.message);
    throw new Error("Erro ao buscar dados.");
  }
};

const updateData = async (url, data) => {
  try {
    await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erro ao atualizar dados.", error.message);
    throw new Error("Erro ao atualizar dados.");
  }
};

export const updateVideo = (id, video) => updateData(`${API_URL}/${id}`, video);

export const fetchVideos = () => fetchData(API_URL);

export const updateCategory = (id, category) =>
  updateData(`${API_URL}/${id}`, category);
