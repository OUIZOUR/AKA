package com.aka.konnach.repository;

import com.aka.konnach.model.ToDoDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IToDoRepository extends JpaRepository<ToDoDto, Integer> {
}
