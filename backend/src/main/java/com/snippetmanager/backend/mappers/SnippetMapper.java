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
        return new Snippet(
                snippetDTO.getId(),
                snippetDTO.getTitle(),
                snippetDTO.getDescription(),
                snippetDTO.getContent(),
                snippetDTO.getLanguage(),
                user
        );
    }
}
