import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

export default function DropDown() {
    const { movies, refreshMovies } = useContext(MovieContext);

    const handleDelete = async (e) => {
        const movieId = e.target.value;
        if (!movieId) return;

        try {
            const response = await fetch("http://localhost:8080/movies/" + movieId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                await refreshMovies();
                console.log('Movie deleted successfully and list refreshed');
            } else {
                console.error('Failed to delete movie');
            }
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div className="movie-dropdown">
            <select onChange={handleDelete} defaultValue="">
                <option value="" disabled>Select movie to delete</option>
                {movies.map(movie => (
                    <option key={movie.id} value={movie.id}>
                        {movie.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
