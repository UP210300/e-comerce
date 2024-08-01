package com.ecomerce.e_comerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecomerce.e_comerce.model.Category;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "SELECT * FROM categories ORDER BY name ASC", nativeQuery = true)
    List<Category> findAllOrderedByName();
    
    @Query(value = "SELECT * FROM categories WHERE id_category = ?1", nativeQuery = true)
    Category findByIdCategory(Integer idCategory);
}
