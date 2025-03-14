import React from "react";

export default function ChangeMovies({ sortPreference, dispatch, sortedMovies }) {
    return (
        <div className="results">
            <h2>Movie List</h2>
            <select
                value={sortPreference}
                onChange={(e) => dispatch({ type: "SET_SORTING", payload: e.target.value })}
            >
                <option value="high to low">Best: High to Low</option>
                <option value="low to high">Best: Low to High</option>
            </select>

            <MovieList movies={sortedMovies} dispatch={dispatch} />
        </div>
    );
}
