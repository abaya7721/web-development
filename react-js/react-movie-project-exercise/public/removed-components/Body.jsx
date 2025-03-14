/*
import React, {useReducer, useEffect} from 'react';
import '../App.css';
import Movie from './Movie';
import ItemCard from './MovieCard.jsx';
import taskReducer from "./reducers/taskReducer.js";
import {sortMovies} from "../utilites/sortingUtility.js";

export default function Body() {


    const sortedMovies = sortMovies(state.tasks, state.sortPreference);

    useEffect(() => {
        fetch('http://localhost:8080/movies',
            {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
            }).then (response => response.json())
            .then((data) => {
                console.log(data);
                    dispatch({type: "ADD_MOVIES", payload: data});
            })
    }, []);


    return (
        <div className="App">
            <div className="container">
                <h1>Task Manager</h1>
                <ItemCard dispatch={dispatch}/>
                {state.tasks.length > 0 && (
                    <div className="results">

                        <h2>All Tasks</h2>
                        <select value={state.sortPreference}
                                onChange={e => dispatch({type: "SET_SORTING", payload: e.target.value})}>
                            <option value="high to low">Priority: High to Low</option>
                            <option value="low to high">Priority: Low to High</option>
                            <option value="newest to oldest">Date Created: Newest</option>
                            <option value="oldest to newest">Date Created: Oldest</option>
                        </select>

                        <Movie tasks={sortedMovies} dispatch={dispatch}/>

                    </div>
                )}
            </div>
        </div>
    )

}*/
