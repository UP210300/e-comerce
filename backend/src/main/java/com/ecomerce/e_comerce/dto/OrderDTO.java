package com.ecomerce.e_comerce.dto;

import com.ecomerce.e_comerce.model.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    @JsonIgnore
    private Integer idOrder;

    @JsonProperty("customer")
    private Customer customer;

    @JsonProperty("amount")
    private Double amount;

    @JsonProperty("shippingAddress")
    private String shippingAddress;

    @JsonProperty("orderDate")
    private LocalDate orderDate;

    @JsonProperty("orderStatus")
    private String orderStatus;
}
