package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {

    @JsonProperty("id_order")
    private Integer idOrder;

    @JsonProperty("id_product")
    private Integer idProduct;

    @JsonProperty("price")
    private Double price;

    @JsonProperty("quantity")
    private Integer quantity;
}