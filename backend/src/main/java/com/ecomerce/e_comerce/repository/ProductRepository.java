package com.ecomerce.e_comerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.ecomerce.e_comerce.model.Product;
import java.util.Collection;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT * FROM products WHERE stock > ?1", nativeQuery = true)
    Collection<Product> findProductsInStockGreaterThan(Integer stock);

    @Query(value = "SELECT * FROM products WHERE name LIKE %?1%", nativeQuery = true)
    Collection<Product> findProductsByName(String name);

    @Query(value = "SELECT c.name AS category_name, COUNT(p.id_product) AS product_count " +
                   "FROM products p " +
                   "JOIN product_categories pc ON p.id_product = pc.id_product " +
                   "JOIN categories c ON pc.id_category = c.id_category " +
                   "GROUP BY c.name", nativeQuery = true)
    List<Object[]> countProductsByCategory();

    @Query(value = "SELECT name, price FROM products ORDER BY price DESC LIMIT ?1", nativeQuery = true)
    List<Object[]> findTopNMostExpensiveProducts(Integer limit);

}

