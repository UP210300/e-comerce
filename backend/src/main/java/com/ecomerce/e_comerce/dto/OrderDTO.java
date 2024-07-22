package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    @JsonIgnore
    private Integer idOrder;

    @NotNull
    @JsonProperty("customer_id")
    private Integer customerId;

    @NotNull
    @JsonProperty("amount")
    private Double amount;

    @NotEmpty
    @JsonProperty("shipping_address")
    private String shippingAddress;

    @NotNull
    @JsonProperty("order_date")
    private LocalDate orderDate;

    @NotEmpty
    @JsonProperty("order_status")
    private String orderStatus;
}
