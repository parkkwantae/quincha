import axios from "axios";

export const base_api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.API_KEY,
    language: "ko",
  },
});

export const image_url = "https://image.tmdb.org/t/p/w500";
