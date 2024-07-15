package com.ecomerce.e_comerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecomerce.e_comerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}

