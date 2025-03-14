import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";
import "../AppMovie.css";

export default function Login () {
    const { user, validateLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login attempt with username:', username);

        try {
            const success = await validateLogin(username, password);
            console.log('Login result:', success);
            
            if (success) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                navigate(user.authority === "ADMIN" ? "/admin" : "/movies");
                }
             else {
                console.log('Login failed');
                setShowError(true);
                navigate("/login");
            }
        } catch (error) {
            console.error('Login error:', error);
            setShowError(true);
        }
    };

    return (
        <form className="login-form">
            <h2>Login</h2>
            <div>
                {showError ? 
                    <div style={{color: "red"}}>Invalid Login</div> : 
                    ""
                }
                {
                    user.authority === "ADMIN" && user.authenticated ?
                    <div>Welcome to the Admin Page, {user.username}</div> :
                    ""
                }
                <label>Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <br/>
                <label>Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
            </div>
            <button 
                className="button" 
                onClick={handleSubmit}
            >
                Login
            </button>
        </form>
    );
}
