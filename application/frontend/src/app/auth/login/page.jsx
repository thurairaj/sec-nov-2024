import {useRouter} from "next/navigation";
import {useState} from "react";
import {loginUser} from "@/app/api/auth";
import Cookies from "js-cookie";

export default function LoginPage(props) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const {token} = await loginUser(email, password);
            Cookies.set("token", token, {path: "/", secure: true});
            router.push("/dashboard");
        } catch (e) {
            setError(e.response?.data?.message || "Login failed");
        }
    }

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input value={password} type={"password"} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
