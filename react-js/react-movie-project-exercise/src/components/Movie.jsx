import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import SortForm from '../utilites/SortForm.jsx';

export default function Movie() {
    const { sortedMovies } = useContext(MovieContext);
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();
    // const query = new URLSearchParams(useLocation().search);
    // const searchTitle = query.get("title") || "";
    // const searchYear = query.get("year") || "";

    // logout
    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // check if movies array is empty on first render
    if (!sortedMovies || sortedMovies.length === 0) {
        return <div>Loading movies...</div>;
    }

    // let filteredMovies = sortedMovies.filter((m) =>
    //     m.title.toLowerCase().includes(searchTitle.toLowerCase())
    // );
    //
    // if (searchYear) {
    //     filteredMovies = filteredMovies.filter((m) =>
    //         m.releaseYear.toString().includes(searchYear)
    //     );
    // }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Movies</h2>
                {user.authenticated && (
                    <button 
                        onClick={handleLogout}
                        className="button-color-delete"
                    >
                        Logout
                    </button>
                )}
            </div>
            <div>
                <SortForm />
            </div>
            <div className="card-container">
                {sortedMovies.map((movie) => (
                    <div key={movie.id} className="movie-item-single">
                        <h3>{movie.title}</h3>
                        <div className="movie-item">
                            <div className="movie-item-single">Year: {movie.year}</div>
                            <div className="movie-item-single">Rating: {movie.rating}</div>
                            <div className="movie-item-single">Ranking: #{movie.ranking}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
