package com.aka.konnach.service;

import com.aka.konnach.model.ToDoDto;
import com.aka.konnach.repository.IToDoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {
    private IToDoRepository iToDoRepository;

    public ToDoService(IToDoRepository iToDoRepository) {
        this.iToDoRepository = iToDoRepository;
    }

    public List<ToDoDto> findAllToDo(){
        return this.iToDoRepository.findAll();
    }

    public Optional<ToDoDto> findToDoById(Integer id){
        return this.iToDoRepository.findById(id);
    }

    public void saveToDo(ToDoDto toDoDto){
        iToDoRepository.save(toDoDto);
    }

    public void deleteToDto(ToDoDto toDoDto){
        iToDoRepository.delete(toDoDto);
    }
}
