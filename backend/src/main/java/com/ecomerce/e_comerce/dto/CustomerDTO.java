package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CustomerDTO {

    @JsonIgnore
    private Integer idCustomer;
    
    private Integer user;

    @NotEmpty
    private String address;

    @NotEmpty
    private String country;

    @NotEmpty
    private String city;

    @NotEmpty
    private String phone;
}
