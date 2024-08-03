package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT * FROM products WHERE name LIKE CONCAT('%', :name, '%')", nativeQuery = true)
    Collection<Product> findProductsByName(@Param("name") String name);
    
}

