package com.snippetmanager.backend.mappers;

import com.snippetmanager.backend.dtos.SnippetDTO;
import com.snippetmanager.backend.entities.Snippet;
import com.snippetmanager.backend.entities.User;

public class SnippetMapper {
    public static SnippetDTO mapSnippetToSnippetDTO(Snippet snippet) {
        return new SnippetDTO(
            snippet.getId(),
            snippet.getTitle(),
            snippet.getDescription(),
            snippet.getContent(),
            snippet.getLanguage(),
            snippet.getUser().getId()
        );
    }

    public static Snippet mapSnippetDTOToSnippet(SnippetDTO snippetDTO, User user) {
        Snippet snippet = new Snippet();

        snippet.setTitle(snippetDTO.getTitle());
        snippet.setDescription(snippetDTO.getDescription());
        snippet.setContent(snippetDTO.getContent());
        snippet.setLanguage(snippetDTO.getLanguage());
        snippet.setUser(user);

        return snippet;
    }
}
