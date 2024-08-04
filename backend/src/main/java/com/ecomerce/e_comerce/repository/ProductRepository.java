package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT p FROM Product p WHERE p.name LIKE %:name%")
    Collection<Product> findProductsByName(@Param("name") String name);

    @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId")
    List<Product> findByCategoryId(@Param("categoryId") Integer categoryId);

    @Query(value = "SELECT p FROM Product p JOIN OrderDetail od ON p.idProduct = od.product.idProduct GROUP BY p.idProduct ORDER BY SUM(od.quantity) DESC")
    List<Product> findTopSellingProducts();

    @Query(value = "SELECT p FROM Product p LEFT JOIN OrderDetail od ON p.idProduct = od.product.idProduct GROUP BY p.idProduct ORDER BY COALESCE(SUM(od.quantity), 0) ASC")
    List<Product> findLeastSellingProducts();
}
