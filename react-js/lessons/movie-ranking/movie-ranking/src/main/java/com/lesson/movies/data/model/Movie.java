package com.lesson.movies.data.model;


import jakarta.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "Movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    int ranking;
    String title;
    String director;
    String year;
    String duration;
    String rating;
    String globalGross;
    String posterUrl;

    public Movie() {
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public Movie(UUID id, int ranking, String title, String director, String year, String duration, String rating, String globalGross, String posterURL) {
        this.id = id;
        this.ranking = ranking;
        this.title = title;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.rating = rating;
        this.globalGross = globalGross;
        this.posterUrl = posterURL;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        ranking = ranking;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getGlobalGross() {
        return globalGross;
    }

    public void setGlobalGross(String globalGross) {
        this.globalGross = globalGross;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Movie movie)) return false;
        return getRanking() == movie.getRanking() && Objects.equals(getId(), movie.getId()) && Objects.equals(getTitle(), movie.getTitle()) && Objects.equals(getDirector(), movie.getDirector()) && Objects.equals(getYear(), movie.getYear()) && Objects.equals(getDuration(), movie.getDuration()) && Objects.equals(getRating(), movie.getRating()) && Objects.equals(getGlobalGross(), movie.getGlobalGross()) && Objects.equals(getPosterUrl(), movie.getPosterUrl());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getRanking(), getTitle(), getDirector(), getYear(), getDuration(), getRating(), getGlobalGross(), getPosterUrl());
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", ranking=" + ranking +
                ", title='" + title + '\'' +
                ", director='" + director + '\'' +
                ", year='" + year + '\'' +
                ", duration='" + duration + '\'' +
                ", rating='" + rating + '\'' +
                ", globalGross='" + globalGross + '\'' +
                ", posterUrl='" + posterUrl + '\'' +
                '}';
    }
}

