package com.snippetmanager.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SnippetDTO {
    private Long id;

    private String title;

    private String description;

    private String content;

    private String language;

    private Long userId;
}
