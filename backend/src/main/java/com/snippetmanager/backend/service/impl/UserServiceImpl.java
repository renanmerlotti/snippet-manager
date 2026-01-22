package com.snippetmanager.backend.service.impl;

import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;
import com.snippetmanager.backend.entities.User;
import com.snippetmanager.backend.mappers.UserMapper;
import com.snippetmanager.backend.repositories.UserRepository;
import com.snippetmanager.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserResponseDTO createUser(UserRegistrationDTO userRegistrationDTO) {

        User user = UserMapper.mapUserRegistrationDTOToUser(userRegistrationDTO);
        User savedUser = userRepository.save(user);

        return UserMapper.mapUserToUserResponseDTO(savedUser);
    }


}
