package com.snippetmanager.backend.service;

import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;

import java.util.List;


public interface UserService {
    UserResponseDTO createUser(UserRegistrationDTO userRegistrationDTO);

    UserResponseDTO getUserById(Long userId);

    List<UserResponseDTO> getAllUsers();

    void deleteUser(Long userId);
}
