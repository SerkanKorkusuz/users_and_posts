import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE_DEVELOPMENT
    : process.env.REACT_APP_API_BASE_DEVELOPMENT;

const client = axios.create({
  baseURL,
  timeout: 5000,
});
export default client;
