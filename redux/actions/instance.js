import axios from "axios";

const instance = axios.create({
  baseURL: " https://691f06d5.ngrok.io/"
});

export default instance;
