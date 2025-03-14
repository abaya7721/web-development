import React, {useState} from 'react';
import '../App.css';

function ItemCard({movie}) {

    const {id, rank, title, director, year, duration, rating, globalGross} = movie;

    return (
        <div className="task-item">
            <div className={"card-container"}>
                <p>{rank}</p>
                <p>{title}, {year}</p>
                <p>{director}</p>
                <p>{duration}{rating}{globalGross}</p>
            </div>
        </div>
    );
}

function MovieList({movies, dispatch}) {
    console.log("movies", movies);

    return (
        <div className="class-list"> {
            movies.map(task =>
                <ItemCard key={task.id} task={task} dispatch={dispatch} ></ItemCard>
            )
        }
        </div>
    )
}

export default MovieList;



