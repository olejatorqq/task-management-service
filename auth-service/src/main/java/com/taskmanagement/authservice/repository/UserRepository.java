package com.taskmanagement.authservice.repository;

import com.taskmanagement.authservice.model.UserCredentials;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    private List<UserCredentials> users = new ArrayList<>();

    public void save(UserCredentials user) {
        users.add(user);
    }

    public UserCredentials findByUsername(String username) {
        return users.stream()
                .filter(user -> user.getUsername().equals(username))
                .findFirst()
                .orElse(null);
    }
}
