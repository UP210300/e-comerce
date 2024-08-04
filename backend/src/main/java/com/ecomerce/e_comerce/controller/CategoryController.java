package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.CategoryDTO;
import com.ecomerce.e_comerce.exception.CategoryNotFoundException;
import com.ecomerce.e_comerce.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<CategoryDTO> getAllCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable Integer id) throws CategoryNotFoundException {
        try {
            CategoryDTO categoryDTO = categoryService.findById(id);
            return ResponseEntity.ok(categoryDTO);
        } catch (CategoryNotFoundException e) {
            throw new CategoryNotFoundException("Categoría no encontrada con id " + id);
        }
    }

    @PostMapping("/addCategory")
    public CategoryDTO createCategory(@RequestBody CategoryDTO categoryDTO) {
        return categoryService.save(categoryDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(@PathVariable Integer id, @RequestBody CategoryDTO categoryDTO) throws CategoryNotFoundException {
        try {
            CategoryDTO updatedCategory = categoryService.update(id, categoryDTO);
            return ResponseEntity.ok(updatedCategory);
        } catch (CategoryNotFoundException e) {
            throw new CategoryNotFoundException("Categoría no encontrada con id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Integer id) throws CategoryNotFoundException {
        try {
            categoryService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (CategoryNotFoundException e) {
            throw new CategoryNotFoundException("Categoría no encontrada con id " + id);
        }
    }
}
