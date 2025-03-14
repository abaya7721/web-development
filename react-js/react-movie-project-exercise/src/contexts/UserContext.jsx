import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const guest = { 
        username: "", 
        password: "", 
        authenticated: false, 
        authority: "GUEST"
    };
    
    const [user, setUser] = useState(guest);

    const validateLogin = async (username, password) => {
        try {
            console.log('Sending login request:', { username, password });
            
            const response = await fetch("http://localhost:8080/users/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const userData = await response.json();
                console.log('Received user data:', userData);
                
                setUser({
                    username: userData.username,
                    password: "",
                    authenticated: true,
                    authority: userData.authority
                });
                return true;
            } else {
                console.error("Authentication failed");
                setUser(guest);
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error);
            setUser(guest);
            return false;
        }
    };

    const logout = () => {
        setUser(guest);
    };

    return (
        <UserContext.Provider value={{ user, validateLogin, logout }}>
            {children}
        </UserContext.Provider>
    );
};
