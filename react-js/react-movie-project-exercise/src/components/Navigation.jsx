import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Navigation() {
    const { user } = useContext(UserContext);

    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/movies">Home</Link></li>
                {!user.authenticated ? (
                    <li><Link to="/login">Login</Link></li>
                ) : (
                    <>
                        {user.authority === "ADMIN" && (
                            <li><Link to="/admin">Admin</Link></li>
                        )}
                        <li><Link to="/movies">Movies</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
} 