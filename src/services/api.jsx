// import axios from "axios";
import apiVideos from "../json/db.json";

const fetchVideos = async () => {
  // const response = await axios.get('URL_DA_API');
  // return response.data.videos;
  return apiVideos.videos;
};

export { fetchVideos };
