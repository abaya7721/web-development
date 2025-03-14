package com.lesson.movies.data.repository;

import com.lesson.movies.data.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MovieRepository extends JpaRepository<Movie, UUID> {
}
