package com.snippetmanager.backend.service.impl;

import com.snippetmanager.backend.dtos.SnippetDTO;
import com.snippetmanager.backend.entities.Snippet;
import com.snippetmanager.backend.entities.User;
import com.snippetmanager.backend.exceptions.ResourceNotFoundException;
import com.snippetmanager.backend.mappers.SnippetMapper;
import com.snippetmanager.backend.repositories.SnippetRepository;
import com.snippetmanager.backend.repositories.UserRepository;
import com.snippetmanager.backend.service.SnippetService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SnippetServiceImpl implements SnippetService {

    private SnippetRepository snippetRepository;

    private UserRepository userRepository;

    @Override
    public SnippetDTO createSnippet(SnippetDTO snippetDTO) {
        User user = userRepository.findById(snippetDTO.getUserId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("O usuário de id " + snippetDTO.getUserId() + " não foi encontrado"));

        Snippet snippet = SnippetMapper.mapSnippetDTOToSnippet(snippetDTO, user);
        Snippet savedSnippet = snippetRepository.save(snippet);

        return SnippetMapper.mapSnippetToSnippetDTO(savedSnippet);
    }


}
