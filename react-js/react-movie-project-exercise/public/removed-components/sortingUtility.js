export const sortMovies = (movies, preference) => {

    switch (preference){
        case "high to low":
            return [...movies].sort((a, b) => a.ranking - b.ranking);
        case "low to high":
            return [...movies].sort((a, b) => b.ranking - a.ranking);
        default:
            return movies;
    }

}