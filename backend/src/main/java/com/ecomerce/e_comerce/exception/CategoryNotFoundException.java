package com.ecomerce.e_comerce.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)

public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException(String message) {
        super("ERR_CATEGORY_NOT_FOUND", message, null);
    }
}