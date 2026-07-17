import axios from "axios";

const api = axios.create({
  baseURL: "https://fintrack-expense-tracker-i5lt.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;