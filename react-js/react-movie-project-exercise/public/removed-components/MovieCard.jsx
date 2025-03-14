import React from 'react';
import '../../src/AppMovie.css';
import {Clock } from "lucide-react"

function MovieCard({movie}) {

    const {ranking, title, director, year, duration, rating, globalGross} = movie;


    return (
        <div className="task-item">
            <div className="movie-rank">{ranking}</div>
            <div className="movie-content">
                <h3 className="movie-title">
                    {title} <span className="movie-year">({year})</span>
                </h3>
                <p className="movie-director">Director: {director}</p>
                <div className="movie-meta">
                    <div className="movie-duration">
                        <Clock size={16} />
                        ({duration})
                    </div>
                    <div className="movie-rating">
                        {rating}
                    </div>
                    <div className="movie-gross">
                        {globalGross}
                    </div>
                </div>
            </div>
        </div>
    )
}

function MovieList({movies = [], dispatch}) {

    console.log("movies", movies);

    return (
        <div className="class-list"> {
            movies.map(movie =>
                <MovieCard key={movie.id} movie={movie} dispatch={dispatch}  ></MovieCard>
            )
        }
        </div>
    )
}

export default MovieList;



