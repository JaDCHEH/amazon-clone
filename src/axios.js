import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-clone-ea21a.cloudfunctions.net/api",
});

export default instance;
