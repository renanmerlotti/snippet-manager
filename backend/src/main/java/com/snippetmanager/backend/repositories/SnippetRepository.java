package com.snippetmanager.backend.repositories;

import com.snippetmanager.backend.entities.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SnippetRepository extends JpaRepository<Snippet, Long> {
}
