package com.ecomerce.e_comerce.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class ProductImageDTO {

    @JsonIgnore
    private Integer idImage;
    
    private String imageUrl;
}

