package com.snippetmanager.backend.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "snippets")
public class Snippet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Lob
    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "language")
    private String language;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
