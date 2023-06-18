import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ZeF06eTVUQZZGL9pDYR1G2eBHrRMi6OkZd3ZakiYCdM",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
