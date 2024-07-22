package com.ecomerce.e_comerce.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CategoryDTO {

    private Integer idCategory;

    @NotEmpty
    private String name;

    private String description;
}
