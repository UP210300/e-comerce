package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p JOIN ProductCategory pc ON p.idProduct = pc.id.idProduct WHERE pc.id.idCategory = :categoryId")
    List<Product> findProductsByCategoryId(@Param("categoryId") Integer categoryId);

    @Query(value = "SELECT * FROM products WHERE stock > ?1", nativeQuery = true)
    Collection<Product> findProductsInStockGreaterThan(Integer stock);

    @Query(value = "SELECT * FROM products WHERE name LIKE CONCAT('%', :name, '%')", nativeQuery = true)
    Collection<Product> findProductsByName(@Param("name") String name);
    
}

