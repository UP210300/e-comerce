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
@Table (name = "users")
public class User {
    @Id
    @Column(name="id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotEmpty
    private String username;

    @NotEmpty
    private String email;
    
    @NotEmpty
    private String password;

    @NotEmpty
    private String first_name;

    @NotEmpty
    private String last_name;

    @Column(nullable = false)
    private String role = "customer";
 
}
