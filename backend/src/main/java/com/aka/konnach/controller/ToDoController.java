package com.aka.konnach.controller;

import com.aka.konnach.model.ToDoDto;
import com.aka.konnach.service.ToDoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin("*")
public class ToDoController {
    private ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }
    @GetMapping("")
    public ResponseEntity<List<ToDoDto>> getToDoList () {
        return ResponseEntity.ok(toDoService.findAll());
    }
}
