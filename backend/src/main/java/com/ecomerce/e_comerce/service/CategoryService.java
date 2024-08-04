package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.CategoryDTO;
import com.ecomerce.e_comerce.exception.CategoryNotFoundException;
import com.ecomerce.e_comerce.model.Category;
import com.ecomerce.e_comerce.repository.CategoryRepository;
import com.ecomerce.e_comerce.mappers.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    public List<CategoryDTO> findAll() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(categoryMapper::toCategoryDTO)
                .collect(Collectors.toList());
    }

    public CategoryDTO findById(Integer id) throws CategoryNotFoundException{
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFoundException("Category with ID " + id + " not found"));
        return categoryMapper.toCategoryDTO(category);
    }

    public CategoryDTO save(CategoryDTO categoryDTO) {
        Category category = categoryMapper.toCategory(categoryDTO);
        Category savedCategory = categoryRepository.save(category);
        return categoryMapper.toCategoryDTO(savedCategory);
    }

    public CategoryDTO update(Integer id, CategoryDTO categoryDTO) throws CategoryNotFoundException{
        Category existingCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFoundException("Category with ID " + id + " not found"));

        existingCategory.setName(categoryDTO.getName());
        existingCategory.setDescription(categoryDTO.getDescription());

        Category updatedCategory = categoryRepository.save(existingCategory);
        return categoryMapper.toCategoryDTO(updatedCategory);
    }

    public void deleteById(Integer id) throws CategoryNotFoundException{
        if (!categoryRepository.existsById(id)) {
            throw new CategoryNotFoundException("Category with ID " + id + " not found");
        }
        categoryRepository.deleteById(id);
    }
}
