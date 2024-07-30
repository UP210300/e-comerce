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
public class ProductCategoryDTO {

    @JsonProperty("idProduct")
    private Integer idProduct;

    @JsonProperty("idCategory")
    private Integer idCategory;
}
