import axios from "axios";
const KEY = "AIzaSyDwr_we1mifeGAZnxaDrYd2TZlYzDCE9r0";

const search = async params => {
  return await axios
    .create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    })
    .get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        params
      }
    });
};

export default { search };
