package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.model.Category;
import com.ecomerce.e_comerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public List<Category> findAllOrderedByName() {
        return categoryRepository.findAllByOrderByNameAsc();
    }


    public Category findById(Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    public void deleteById(Integer id) {
        categoryRepository.deleteById(id);
    }
}
