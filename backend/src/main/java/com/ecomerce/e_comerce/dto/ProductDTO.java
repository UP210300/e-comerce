package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    @JsonProperty("id")
    private Integer idProduct;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;

    @JsonProperty("price")
    private Float price;

    @JsonProperty("stock")
    private Integer stock;

    @JsonProperty("images")
    private List<ProductImageDTO> images;
}
