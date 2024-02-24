package com.aka.konnach.service;

import com.aka.konnach.model.ToDoDto;
import com.aka.konnach.repository.IToDoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    private IToDoRepository iToDoRepository;

    public ToDoService(IToDoRepository iToDoRepository) {
        this.iToDoRepository = iToDoRepository;
    }

    public List<ToDoDto> findAll(){
        return this.iToDoRepository.findAll();
    }
}
