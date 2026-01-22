package com.snippetmanager.backend.mappers;

import com.snippetmanager.backend.dtos.SnippetDTO;
import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;
import com.snippetmanager.backend.entities.User;

import java.util.List;

public class UserMapper {
    public static UserResponseDTO mapUserToUserResponse(User user) {
        List<SnippetDTO> snippetDTOs = user.getSnippets().stream()
                .map(s -> {
                    return SnippetMapper.mapSnippetToSnippetDTO(s);
                }).toList();

        return new UserResponseDTO(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                snippetDTOs
        );
    }

    public static UserRegistrationDTO mapUserToUserRegistration(User user) {
        return new UserRegistrationDTO(
            user.getUsername(),
            user.getEmail(),
            user.getPassword()
        );
    }

    public static User mapUserRegistrationDTOToUser(UserRegistrationDTO userRegistrationDTO) {
        User user = new User();

        user.setUsername(userRegistrationDTO.getUsername());
        user.setEmail(userRegistrationDTO.getEmail());
        user.setPassword(userRegistrationDTO.getPassword());

        return user;
    }
}
