package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {

    @JsonIgnore
    private Integer orderId;

    @JsonIgnore
    private Integer productId;

    @NotNull
    @JsonProperty("price")
    private Double price;

    @NotNull
    @JsonProperty("quantity")
    private Integer quantity;
}
