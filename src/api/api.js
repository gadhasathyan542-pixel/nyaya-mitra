import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/auth/",
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use((config) => {

    // Don't attach token for login or register
    if (
        config.url === "login/" ||
        config.url === "register/"
    ) {
        return config;
    }

    const token = localStorage.getItem("access");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;