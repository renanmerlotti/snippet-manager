package com.snippetmanager.backend.controllers;

import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;
import com.snippetmanager.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        UserResponseDTO savedUser = userService.createUser(userRegistrationDTO);

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

}
