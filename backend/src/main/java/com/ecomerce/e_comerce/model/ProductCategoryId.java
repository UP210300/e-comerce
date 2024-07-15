package com.ecomerce.e_comerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class ProductCategoryId implements Serializable {

    @Column(name = "id_product")
    private Integer idProduct;

    @Column(name = "id_category")
    private Integer idCategory;

}
