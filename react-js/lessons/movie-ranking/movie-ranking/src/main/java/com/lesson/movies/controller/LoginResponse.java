package com.lesson.movies.controller;


public class LoginResponse {
    private String username;
    private String authority;
    private boolean authenticated;

    public LoginResponse() {}


    public LoginResponse(String username, String authority, boolean authenticated) {
        this.username = username;
        this.authority = authority;
        this.authenticated = authenticated;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }
}