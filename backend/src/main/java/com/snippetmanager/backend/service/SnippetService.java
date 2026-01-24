package com.snippetmanager.backend.service;

import com.snippetmanager.backend.dtos.SnippetDTO;

public interface SnippetService {
    SnippetDTO createSnippet(SnippetDTO snippetDTO);
}
