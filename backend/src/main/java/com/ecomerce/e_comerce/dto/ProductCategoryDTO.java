package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @JsonProperty("idProduct")
    private Integer idProduct;

    @JsonIgnore
    @JsonProperty("idCategory")
    private Integer idCategory;
}
