package com.miya.masa.domain.model.todo;

import org.springframework.data.jpa.repository.JpaRepository;

// @RepositoryRestResource(path = "todos", collectionResourceRel = "todos")
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
