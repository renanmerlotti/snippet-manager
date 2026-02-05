package com.snippetmanager.backend.controllers;

import com.snippetmanager.backend.dtos.SnippetDTO;
import com.snippetmanager.backend.service.SnippetService;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

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

    @GetMapping("{id}")
    public ResponseEntity<SnippetDTO> getSnippetById(@PathVariable("id") Long id) {
        SnippetDTO snippetDTO = snippetService.getSnippetById(id);

        return  ResponseEntity.ok(snippetDTO);
    }

    @GetMapping
    public ResponseEntity<List<SnippetDTO>> getAllSnippets() {
        List<SnippetDTO> listSnippetDTOs = snippetService.getAllSnippets();

        return ResponseEntity.ok(listSnippetDTOs);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSnippetById(@PathVariable("id") Long id) {
        snippetService.deleteSnippet(id);

        return ResponseEntity.ok("Snippet deletado com sucesso");
    }

    @GetMapping("/username")
    public ResponseEntity<List<SnippetDTO>> getAlLSnippetsByUsername(Principal principal) {
        String username = principal.getName();

        List<SnippetDTO> snippets = snippetService.findByUserUsername(username);
        return ResponseEntity.ok(snippets);
    }

}
