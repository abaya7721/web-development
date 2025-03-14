
import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext.jsx";
import { Navigate, useParams } from "react-router-dom";

export default function MovieDetails() {
    const { movieId } = useParams(); // Get the movieId from the URL parameters
    const movies = useContext(MovieContext); // Access movies from MovieContext
    const movie = movies.find(movie => movie.rank === parseInt(movieRank)); // Find the specific movie by ID

    // if the movies haven't loaded yet
    if (movies.length === 0) {
        return <>Loading...</>;
    }

    // "not found" page if the movie doesn't exist
    if (!movie) {
        return <Navigate to={"*"} />;
    }

    // movie details
    return (
        <div>
            <h2>{movie.title}</h2>
            <h3>Directed by: {movie.director}</h3>
            <p>Release Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>Duration: {movie.duration} minutes</p>
            <p>Global Gross: ${movie.globalGross}</p>
        </div>
    );
}

