"use client"

import {useAuth} from "@/components/AuthProvider";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function DashboardLayout({children}) {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push("/auth/login");
    }, [user])

    return user ? (
        <div>
            <aside>Sidebar</aside>
            <main>{{children}}</main>
        </div>
    ) : null;
}
