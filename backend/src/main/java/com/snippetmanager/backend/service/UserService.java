package com.snippetmanager.backend.service;

import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;


public interface UserService {
    UserResponseDTO createUser(UserRegistrationDTO userRegistrationDTO);
}
