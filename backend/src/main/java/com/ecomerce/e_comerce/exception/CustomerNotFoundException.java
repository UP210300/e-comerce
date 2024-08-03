package com.ecomerce.e_comerce.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)

public class CustomerNotFoundException extends RuntimeException {
    public CustomerNotFoundException(String message) {
        super("ERR_CUSTOMER_NOT_FOUND", message, null);
    }
}