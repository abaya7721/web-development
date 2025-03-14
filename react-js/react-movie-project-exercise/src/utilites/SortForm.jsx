import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext.jsx";

export default function SortForm() {
    const { sortPreference, dispatch } = useContext(MovieContext); // Access state and dispatch from MovieProvider
    const handleSortingChange = (e) => {
        dispatch({ type: "SET_SORTING", payload: e.target.value }); // Dispatch sorting action
    };

    return (
        <div className="results">
            <div className="card-header">
                <h1>Ranking</h1>
                <h2>Sort Movies</h2>
            </div>
            <select
                value={sortPreference}
                onChange={handleSortingChange}
            >
                <option value="high to low">Best: High to Low</option>
                <option value="low to high">Best: Low to High</option>
            </select>
        </div>
    );
}
