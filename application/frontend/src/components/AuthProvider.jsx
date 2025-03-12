"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) fetchUser(token)
    })

    const fetchUser = async (token) => {
        try {
            const data = await getMe(token);
            setUser(data);
        } catch (e) {
            Cookies.remove("token");
        }
    }

    const login = async (token) => {
        Cookies.set("token", token);
        fetchUser(token);
        router.push("/dashboard");
    }

    const logout = async (token) => {
        Cookies.remove("token");
        setUser(null);
        router.push("/auth/login");
    }

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
