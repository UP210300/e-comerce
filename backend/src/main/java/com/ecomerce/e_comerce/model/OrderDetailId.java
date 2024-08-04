package com.ecomerce.e_comerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class OrderDetailId implements Serializable {

    @Column(name = "id_order")
    private Integer idOrder;

    @Column(name = "id_product")
    private Integer idProduct;

    public OrderDetailId() {}

    public OrderDetailId(Integer idOrder, Integer idProduct) {
        this.idOrder = idOrder;
        this.idProduct = idProduct;
    }
}