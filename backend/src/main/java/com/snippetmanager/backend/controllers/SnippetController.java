package com.snippetmanager.backend.controllers;

import com.snippetmanager.backend.dtos.SnippetDTO;
import com.snippetmanager.backend.service.SnippetService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/snippets")
@RestController
@AllArgsConstructor
public class SnippetController {

    private SnippetService snippetService;

    @PostMapping
    public ResponseEntity<SnippetDTO> createSnippet(@RequestBody SnippetDTO snippetDTO) {
        SnippetDTO savedSnippet = snippetService.createSnippet(snippetDTO);

        return new ResponseEntity<>(savedSnippet, HttpStatus.CREATED);
    }
}
