package com.taskmanagement.authservice.controller;

import com.taskmanagement.authservice.model.UserCredentials;
import com.taskmanagement.authservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody UserCredentials userCredentials) {
        return authService.login(userCredentials);
    }

    @PostMapping("/register")
    public String register(@RequestBody UserCredentials userCredentials) {
        return authService.register(userCredentials);
    }
}
