package com.lesson.movies.controller;


import com.lesson.movies.data.model.Movie;
import com.lesson.movies.data.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/movies")
public class MovieRankController implements Serializable {
    @Autowired
    MovieRepository movieRepository;

    @GetMapping()
    public ResponseEntity<List<Movie>> getMovies() {
        List<Movie> movies = movieRepository.findAll();
        if (movies.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getResponseById(@PathVariable UUID id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return ResponseEntity.ok(movie.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found");
        }
    }

    @PostMapping()
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
        Movie savedMovie = movieRepository.save(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMovie);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable UUID id) {
        if (movieRepository.existsById(id)) {
            movieRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found");
        }
    }
}

