package com.ecomerce.e_comerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "id_customer")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCustomer;

    @NotEmpty
    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @NotEmpty
    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @NotEmpty
    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @NotEmpty
    @Column(name = "address", nullable = false, length = 255)
    private String address;

    @NotEmpty
    @Column(name = "country", nullable = false, length = 100)
    private String country;

    @NotEmpty
    @Column(name = "city", nullable = false, length = 100)
    private String city;

    @NotEmpty
    @Column(name = "phone", nullable = false, length = 20)
    private String phone;
}