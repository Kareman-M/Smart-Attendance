package com.example.smartattendance;

public class Result {
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        message = message;
    }

    private String message ;
    private User value ;

    public User getValue() {
        return value;
    }

    public void setValue(User value) {
        value = value;
    }

    public Boolean getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(Boolean isCompleted) {
        isCompleted = isCompleted;
    }

    private Boolean isCompleted ;
}
