package com.ecomerce.e_comerce.model;

import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User user;

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
