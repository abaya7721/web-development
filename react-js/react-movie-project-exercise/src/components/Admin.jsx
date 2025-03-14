import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import SortForm from '../utilites/SortForm.jsx';
import DropDown from '../utilites/DropDown';
import AddMovieForm from '../utilites/AddMovieForm';

export default function Admin() {
    const { sortedMovies, refreshMovies } = useContext(MovieContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user.authenticated || user.authority !== "ADMIN") {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!sortedMovies || sortedMovies.length === 0) {
        return <div>Loading movies...</div>;
    }

    const filteredMovies = sortedMovies;

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>Admin Dashboard</h2>
                </div>
                
                <div className="admin-controls">
                    <DropDown />
                </div>

                <AddMovieForm />

                <div className="sort-section">
                    <SortForm />
                </div>
                <div className="card-container">
                    {filteredMovies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                            <h3 className="movie-title">{movie.title}</h3>
                            <div className="movie-details">
                                <div className="movie-info">Year: {movie.year}</div>
                                <div className="movie-info">Rating: {movie.rating}</div>
                                <div className="movie-info">Ranking: #{movie.ranking}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}