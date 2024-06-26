import axios from "axios";

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://www.devarno.com/api";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
