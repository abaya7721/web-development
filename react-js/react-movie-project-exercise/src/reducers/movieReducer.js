export const sortMovies = (movies, preference) => {
    switch (preference) {
        case "high to low":
            // Descending order
            return [...movies].sort((a, b) => b.ranking - a.ranking);
        case "low to high":
            // Ascending order
            return [...movies].sort((a, b) => a.ranking - b.ranking);
        default:
            return movies;
    }
};

export default function movieReducer(state, action) {
    switch (action.type) {
        case "SET_MOVIES":
            return {
                ...state,
                movies: action.payload,
                sortedMovies: sortMovies(action.payload, state.sortPreference),
            };
        case "SET_SORTING":
            return {
                ...state,
                sortPreference: action.payload,
                sortedMovies: sortMovies(state.movies, action.payload),
            };
        case "DELETE_MOVIE":
            { const updatedMovies = state.movies.filter(movie => movie.id !== action.payload);
            return {
                ...state,
                movies: updatedMovies,
                sortedMovies: sortMovies(updatedMovies, state.sortPreference),
            }; }
        case "ADD_MOVIE":
            { const newMovies = [...state.movies, action.payload];
            return {
                ...state,
                movies: newMovies,
                sortedMovies: sortMovies(newMovies, state.sortPreference),
            }; }
        default:
            return state;
    }
}
