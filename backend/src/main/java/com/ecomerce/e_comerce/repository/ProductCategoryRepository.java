package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.ProductCategory;
import com.ecomerce.e_comerce.model.ProductCategoryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, ProductCategoryId> {

    @Query(value = "SELECT * FROM product_categories WHERE id_product = ?1", nativeQuery = true)
    List<ProductCategory> findByProductId(Integer productId);

    @Query(value = "SELECT * FROM product_categories WHERE id_category = ?1", nativeQuery = true)
    List<ProductCategory> findByCategoryId(Integer categoryId);
}
