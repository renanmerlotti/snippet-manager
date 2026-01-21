package com.snippetmanager.backend.repositories;

import com.snippetmanager.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
