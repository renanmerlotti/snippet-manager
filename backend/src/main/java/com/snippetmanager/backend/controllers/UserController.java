package com.snippetmanager.backend.controllers;

import com.snippetmanager.backend.dtos.UserRegistrationDTO;
import com.snippetmanager.backend.dtos.UserResponseDTO;
import com.snippetmanager.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        UserResponseDTO savedUser = userService.createUser(userRegistrationDTO);

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable("id") Long userId) {
        UserResponseDTO userResponseDTO = userService.getUserById(userId);

        return ResponseEntity.ok(userResponseDTO);
    }

    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> userResponseDTOList = userService.getAllUsers();

        return ResponseEntity.ok(userResponseDTOList);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);

        return ResponseEntity.ok("Usuário deletado com sucesso");
    }
}
