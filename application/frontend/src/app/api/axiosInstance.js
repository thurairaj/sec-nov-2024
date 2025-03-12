import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true
})

API.interceptors.request.use((requestObj) => {
    const token = Cookies.getItem("token");
    if (token) {
        requestObj.headers.Authorization = `Bearer ${token}`;
    }
    return requestObj;
}, (err) => Promise.reject(err));

API.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        Cookies.removeItem("token");
        window.location.href = "/auth/login";
    }

    return Promise.reject(error);
})

export default API;
