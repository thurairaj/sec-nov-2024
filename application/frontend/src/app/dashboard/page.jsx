"use client";

import {useAuth} from "@/components/AuthProvider";
import {useEffect, useState} from "react";
import {getUsers} from "@/app/api/user";

export default function DashboardPage() {
    const {user} = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            getUsers().then((resUsers) => {
                setUsers(resUsers);
            }).catch((e) => {
                setError(e.response?.data?.message || e.message || "Failed to load users");
            }).finally(() => setLoading(false));
        }
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}: {user.email} ({user.role})
                    </li>
                ))}
            </ul>
        </div>
    )
}
