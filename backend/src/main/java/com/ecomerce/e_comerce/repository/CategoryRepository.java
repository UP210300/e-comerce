package com.ecomerce.e_comerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.ecomerce.e_comerce.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "SELECT * FROM categories WHERE id_category = ?1", nativeQuery = true)
    Category findByIdCategory(Integer idCategory);
}
