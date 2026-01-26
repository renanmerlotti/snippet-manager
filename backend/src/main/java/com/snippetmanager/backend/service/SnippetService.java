package com.snippetmanager.backend.service;

import com.snippetmanager.backend.dtos.SnippetDTO;

import java.util.List;

public interface SnippetService {
    SnippetDTO createSnippet(SnippetDTO snippetDTO);

    SnippetDTO getSnippetById(Long id);

    List<SnippetDTO> getAllSnippets();

    void deleteSnippet(Long id);
}
