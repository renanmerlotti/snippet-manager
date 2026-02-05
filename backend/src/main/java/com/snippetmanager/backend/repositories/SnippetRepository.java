package com.snippetmanager.backend.repositories;

import com.snippetmanager.backend.entities.Snippet;
import com.snippetmanager.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SnippetRepository extends JpaRepository<Snippet, Long> {
    List<Snippet> findByUserUsername(String username);

    String user(User user);
}
