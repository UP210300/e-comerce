package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import  jakarta.validation.constraints.NotEmpty;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {

    @JsonIgnore
    private Integer idCustomer;

    @NotEmpty
    @JsonProperty("email")
    private String email;

    @NotEmpty
    @JsonProperty("password")
    private String password;

    @NotEmpty
    @JsonProperty("fullName")
    private String fullName;

    @NotEmpty
    @JsonProperty("address")
    private String address;

    @NotEmpty
    @JsonProperty("country")
    private String country;

    @NotEmpty
    @JsonProperty("city")
    private String city;

    @NotEmpty
    @JsonProperty("phone")
    private String phone;
}
