import React, { useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';

export default function AddMovieForm() {
    const { refreshMovies } = useContext(MovieContext);
    
    const [newMovie, setNewMovie] = useState({
        title: '',
        year: '',
        rating: '',
        ranking: '',
        director: '',
        globalGross: ''
    });

    const handleAddMovie = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie)
            });
            
            if (response.ok) {
                setNewMovie({ 
                    title: '', 
                    year: '', 
                    rating: '', 
                    ranking: '',
                    director: '',
                    globalGross: ''
                });
                await refreshMovies();
                console.log('Movie added and list refreshed');
            }
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <div className="add-movie-form">
            <h3>Add New Movie</h3>
            <form onSubmit={handleAddMovie}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                    required
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={newMovie.year}
                    onChange={(e) => setNewMovie({...newMovie, year: e.target.value})}
                    required
                />
                <input
                    type="text"
                    placeholder="Rating"
                    value={newMovie.rating}
                    onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}
                    required
                />
                <input
                    type="number"
                    placeholder="Ranking"
                    value={newMovie.ranking}
                    onChange={(e) => setNewMovie({...newMovie, ranking: e.target.value})}
                    required
                />
                <input
                    type="text"
                    placeholder="Director"
                    value={newMovie.director}
                    onChange={(e) => setNewMovie({...newMovie, director: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Global Gross $"
                    value={newMovie.globalGross}
                    onChange={(e) => setNewMovie({...newMovie, globalGross: e.target.value})}
                />
                <button type="submit" className="button-color">Add Movie</button>
            </form>
        </div>
    );
} 