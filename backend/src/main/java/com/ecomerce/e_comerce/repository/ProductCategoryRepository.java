package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.ProductCategory;
import com.ecomerce.e_comerce.model.ProductCategoryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, ProductCategoryId> {
}
