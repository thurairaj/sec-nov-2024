import {useRouter} from "next/navigation";
import {useState} from "react";
import {registerUser} from "@/app/api/auth";

export default function RegisterPage(props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(name, email, password, age);
            router.push("/auth/login")
        } catch (e) {
            setError(e.response?.data?.message || e.message || "Registration failed");
        }
    }

    return (
        <div>
            <h2>Register Page</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleRegister}>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <input value={age} onChange={e => setAge(e.target.value)}/>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input value={password} type={"password"} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}
