import API from "./axiosInstance";

export const getUsers = async () => {
    const res = await API.get("/users");
    return res.data;
}
