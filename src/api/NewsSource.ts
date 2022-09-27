import axios from "axios";

export const NewsSource = axios.create({
  baseURL: "https://api.newscatcherapi.com/v2",
});