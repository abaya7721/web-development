package com.lesson.movies.data.model;

import jakarta.persistence.*;


import java.util.UUID;

@Entity
@Table(name = "users") // Maps the class to the 'users' table
public class User {

    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "authority")
    private String authority;

    // Default constructor required by JPA
    public User() {}

    // Parameterized constructor
    public User(String username, String password, String authority) {
        this.username = username;
        this.password = password;
        this.authority = authority;
    }

    // Getters and Setters
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    // Override toString() for debugging or logging purposes
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", authority=" + authority +
                '}';
    }

    // Enum to represent the 'authority' field
    public enum Authority {
        ADMIN, USER
    }
}
