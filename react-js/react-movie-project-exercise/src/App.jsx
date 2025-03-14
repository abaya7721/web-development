/*
import React, {useReducer, useEffect} from 'react';
import './AppMovie.css';
import MovieList from './components/MovieCard.jsx';
import movieReducer from "./reducers/movieReducer.js";
import {sortMovies} from "./utilites/sortingUtility.js";

export default function App() {

    const initialState = {movies: [], sortPreference: "high to low"};
    const [state, dispatch] = useReducer(movieReducer, initialState);

    const sortedMovies = sortMovies(state.movies, state.sortPreference);

    useEffect(() => {
        fetch('http://localhost:8080/movies', {
            method: 'GET', headers: {"Content-Type": "application/json"},
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
                dispatch({type: "ADD_MOVIES", payload: data});
            })
            .catch(error => console.log("Error fetching movies", error));
    }, []);


    return (<div className="App">
        <div className="container">
            <h1>Ranking</h1>
            {state.movies.length > 0 && (<div className="results">

                <h2>Movie List</h2>
                <select value={state.sortPreference}
                        onChange={e => dispatch({type: "SET_SORTING", payload: e.target.value})}>
                    <option value="high to low">Best: High to Low</option>
                    <option value="low to high">Best: Low to High</option>
                </select>

                <MovieList movies={sortedMovies} dispatch={dispatch}/>

            </div>)}
        </div>
    </div>)


}*/
