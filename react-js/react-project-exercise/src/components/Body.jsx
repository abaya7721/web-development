import React, { useState, useEffect } from 'react';
import '../App.css';
import Movie from './Movie';

export default function Body() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {setMovies([
        {
            "title": "Blade",
            "year": 1998,
            "genre": "Action, Horror",
            "director": "Stephen Norrington",
            "duration": "120 minutes",
            "rating": "R",
            "globalGross": "$131.2 million"
        },
        {
            "title": "The Day After Tomorrow",
            "year": 2004,
            "genre": "Sci-Fi, Adventure",
            "director": "Roland Emmerich",
            "duration": "124 minutes",
            "rating": "PG-13",
            "globalGross": "$552.6 million"
        },
        {
            "title": "Marley & Me",
            "year": 2008,
            "genre": "Comedy, Drama",
            "director": "David Frankel",
            "duration": "115 minutes",
            "rating": "PG",
            "globalGross": "$247.8 million"
        }
    ])}, []);
    // const bookList = [];
    // for (let i = 0; i < books.length; i++){
    //     bookList.push(<li key={i} >{books[i].title}: {books[i].author}</li>)

    // }

    return (
        <div>
            <ol>
                {movies.map((movie) => (
                    <Movie key={movie.title} title={movie.title} year={movie.year} genre={movie.genre} globalGross={movie.globalGross}  />
                ))}
            </ol>
        </div>

    );

}