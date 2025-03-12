import API from "./axiosInstance"
import Cookies from "js-cookie";

export const loginUser = async (email, password) => {
    const res = await API.post("/user/login", {email, password});
    return res.data;
}

export const registerUser = async (name, email, password, age) => {
    const res = await API.post("/user/register-user", {email, password, name, age});
    return res.data;
}

export const logout = async (token) => {
    Cookies.remove("token");
}

