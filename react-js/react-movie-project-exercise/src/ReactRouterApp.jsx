import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './AppMovie.css';
import { MovieProvider } from './contexts/MovieContext';
import { UserProvider } from './contexts/UserContext';
import { SecureRoute } from "./components/SecureRoute.jsx";
import Navigation from "./components/Navigation.jsx";

import Movie from "./components/Movie.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import NotFound from "./components/NotFound.jsx";

export default function ReactRouterApp() {
    return (
        <MovieProvider>
            <UserProvider>
                <Router>
                    <div className="card-container">
                        <Navigation />
                    </div>
                    <Routes>
                        <Route path="/movies" element={<Movie/>}/>
                        <Route path="/movies" element={<Navigate to={"/"}/>}/>
                        <Route path="/movies/:movieRanking" element={<MovieDetails/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </UserProvider>
        </MovieProvider>
    );
}
