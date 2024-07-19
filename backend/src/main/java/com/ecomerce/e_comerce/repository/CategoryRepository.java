package com.ecomerce.e_comerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecomerce.e_comerce.model.Category;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    List<Category> findAllByOrderByNameAsc();
}
