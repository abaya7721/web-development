import React, {useEffect, createContext, useReducer} from 'react';
import movieReducer from "../reducers/movieReducer.js";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const initialState = {
        movies: [], 
        sortedMovies: [], 
        sortPreference: "high to low",
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Function to get all movies in database
    // Using await and async allows fetch to wait until a response is made
    // Technique prevents having to use .then
    const fetchMovies = async () => {
        try {
            const response = await fetch("http://localhost:8080/movies");
            if (response.ok) {
                const data = await response.json();
                dispatch({ type: "SET_MOVIES", payload: data });
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    // updating movies
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ 
            ...state, 
            dispatch,
            refreshMovies: fetchMovies // refresh function
        }}>
            {children}
        </MovieContext.Provider>
    );
};
