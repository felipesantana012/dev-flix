import { useContext } from "react";
import { VideoContext } from "../context/VideoContext.jsx";

const useVideos = () => {
  return useContext(VideoContext);
};

export default useVideos;
