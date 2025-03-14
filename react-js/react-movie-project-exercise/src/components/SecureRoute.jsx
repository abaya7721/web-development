import React from "react";
import {Navigate} from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { UserContext } from "../contexts/UserContext";
export const SecureRoute = ({ children }) => {

    const { user } = UserContext.Provider;
    
    if (!user.authenticated || user.authority !== "ADMIN") {
        return <Navigate to="/login" />;
    }
    
    return children;
};