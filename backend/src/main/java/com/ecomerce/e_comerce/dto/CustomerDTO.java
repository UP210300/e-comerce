package com.ecomerce.e_comerce.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CustomerDTO {

    private Integer idCustomer;

    @NotEmpty
    private String email;

     @NotEmpty
    private String password;

    @NotEmpty
    private String fullName;

    @NotEmpty
    private String address;

    @NotEmpty
    private String country;

    @NotEmpty
    private String city;

    @NotEmpty
    private String phone;

}
