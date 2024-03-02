package com.aka.konnach.controller;

import com.aka.konnach.exception.ToDoException;
import com.aka.konnach.model.ToDoDto;
import com.aka.konnach.service.ToDoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ToDoController {
    private ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping("/todolist")
    public ResponseEntity<List<ToDoDto>> getToDoList () {
        return new ResponseEntity<>(toDoService.findAllToDo(), HttpStatus.FOUND);
    }

    @GetMapping("/todo/{id}")
    public ResponseEntity<ToDoDto> getToDoById(@PathVariable Integer id) {
        Optional<ToDoDto> toDoDto = toDoService.findToDoById(id);
        if(!toDoDto.isPresent()){
            throw new ToDoException("ToDo est introuvable.");
        }
        return new ResponseEntity<>(toDoDto.get(), HttpStatus.FOUND) ;
    }

    @PostMapping("/todo")
    public ResponseEntity<Void> createToDo(@RequestBody ToDoDto toDoDto){
        toDoService.saveToDo(toDoDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/todo/{id}")
    public ResponseEntity<Void> updateToDo(@PathVariable Integer id, @RequestBody ToDoDto toDoDtoRequest){
        //Chercher toDo à modifier
        Optional<ToDoDto> toDoDtoOptional = toDoService.findToDoById(id);
        if(!toDoDtoOptional.isPresent()){
            throw new ToDoException("ToDo est introuvable.");
        }
        //Si le todo existe, on remplace les valeurs de ses champs par les valeurs de todo dans la requete (body)
        ToDoDto toDoDto = toDoDtoOptional.get();
        toDoDto.setDescription(toDoDtoRequest.getDescription());
        toDoDto.setDeadline(toDoDtoRequest.getDeadline());
        toDoDto.setTitle(toDoDtoRequest.getTitle());
        toDoDto.setCreationDate(toDoDtoRequest.getCreationDate());

        //Sauvegarder dans la bdd
        toDoService.saveToDo(toDoDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/todo/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable Integer id){
        Optional<ToDoDto> toDoDto = toDoService.findToDoById(id);
        if(!toDoDto.isPresent()){
            throw new ToDoException("ToDo est introuvable.");
        }
        toDoService.deleteToDto(toDoDto.get());
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
