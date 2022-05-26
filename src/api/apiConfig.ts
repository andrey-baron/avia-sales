import axios from "axios";

export const API_VERSION = "1.0";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error.message);
  }
);
