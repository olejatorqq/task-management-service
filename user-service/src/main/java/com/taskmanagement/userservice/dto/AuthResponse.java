package com.taskmanagement.userservice.dto;

import com.taskmanagement.userservice.model.User;

import java.util.List;

public class AuthResponse {
    private User user;
    private List<?> tasks;

    public AuthResponse(User user, List<?> tasks) {
        this.user = user;
        this.tasks = tasks;
    }

    public User getUser() {
        return user;
    }

    public List<?> getTasks() {
        return tasks;
    }
}