package com.taskmanagement.authservice.service;

import com.taskmanagement.authservice.model.UserCredentials;
import com.taskmanagement.authservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public String login(UserCredentials userCredentials) {
        UserCredentials user = userRepository.findByUsername(userCredentials.getUsername());
        if (user != null && user.getPassword().equals(userCredentials.getPassword())) {
            return "Auth token";
        } else {
            return "Invalid credentials";
        }
    }

    public String register(UserCredentials userCredentials) {
        userRepository.save(userCredentials);
        return "User registered";
    }
}
