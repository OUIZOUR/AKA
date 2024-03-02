package com.aka.konnach.exception;

public class ToDoException extends RuntimeException{

    public ToDoException(String message) {
        super(message);
    }

    public ToDoException(String message, Throwable cause) {
        super(message, cause);
    }

}
