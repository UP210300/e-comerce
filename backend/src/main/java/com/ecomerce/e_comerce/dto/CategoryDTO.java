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
public class CategoryDTO {

    @JsonProperty("id")
    private Integer idCategory;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;
}
