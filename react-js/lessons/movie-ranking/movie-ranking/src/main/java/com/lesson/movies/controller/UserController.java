package com.lesson.movies.controller;

import com.lesson.movies.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.lesson.movies.data.model.User;
import com.lesson.movies.controller.LoginRequest;
import com.lesson.movies.controller.LoginResponse;


import java.io.Serializable;



@RestController
@RequestMapping("/users")
public class UserController implements Serializable {

    @Autowired
    UserRepository userRepository;


    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            LoginResponse response = new LoginResponse(
                    user.getUsername(),
                    user.getAuthority(),
                    true
            );
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401)
                    .body("Authentication failed: Invalid credentials");
        }
    }
    }