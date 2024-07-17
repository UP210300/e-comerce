package com.ecomerce.e_comerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "id_order")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idOrder;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_customer", nullable = false)
    private Customer customer;

    @NotNull
    @Column(name = "amount", nullable = false, precision = 10)
    private Double amount;

    @NotEmpty
    @Column(name = "shipping_address", nullable = false, length = 255)
    private String shippingAddress;

    @NotNull
    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

    @NotEmpty
    @Column(name = "order_status", nullable = false, length = 50)
    private String orderStatus;
}