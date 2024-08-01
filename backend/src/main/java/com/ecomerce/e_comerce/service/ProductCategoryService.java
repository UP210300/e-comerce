package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.ProductCategoryDTO;
import com.ecomerce.e_comerce.exception.ProductCategoryNotFoundException;
import com.ecomerce.e_comerce.model.Category;
import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.model.ProductCategory;
import com.ecomerce.e_comerce.model.ProductCategoryId;
import com.ecomerce.e_comerce.repository.CategoryRepository;
import com.ecomerce.e_comerce.repository.ProductCategoryRepository;
import com.ecomerce.e_comerce.repository.ProductRepository;
import com.ecomerce.e_comerce.mappers.ProductCategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductCategoryMapper productCategoryMapper;

    public ProductCategoryDTO findById(Integer idProduct, Integer idCategory) {
        ProductCategoryId id = new ProductCategoryId(idProduct, idCategory);
        ProductCategory productCategory = productCategoryRepository.findById(id)
                .orElseThrow(() -> new ProductCategoryNotFoundException("ProductCategory with Product ID " + idProduct + " and Category ID " + idCategory + " not found"));
        return productCategoryMapper.toProductCategoryDTO(productCategory);
    }

    public ProductCategoryDTO save(ProductCategoryDTO productCategoryDTO) {
        Product product = productRepository.findById(productCategoryDTO.getIdProduct())
                .orElseThrow(() -> new ProductCategoryNotFoundException("Product with ID " + productCategoryDTO.getIdProduct() + " not found"));
        Category category = categoryRepository.findById(productCategoryDTO.getIdCategory())
                .orElseThrow(() -> new ProductCategoryNotFoundException("Category with ID " + productCategoryDTO.getIdCategory() + " not found"));

        ProductCategory productCategory = productCategoryMapper.toProductCategory(productCategoryDTO);
        productCategory.setProduct(product);
        productCategory.setCategory(category);

        ProductCategory savedProductCategory = productCategoryRepository.save(productCategory);
        return productCategoryMapper.toProductCategoryDTO(savedProductCategory);
    }

    public ProductCategoryDTO update(Integer idProduct, Integer idCategory, ProductCategoryDTO productCategoryDTO) {
        ProductCategoryId id = new ProductCategoryId(idProduct, idCategory);
        ProductCategory existingProductCategory = productCategoryRepository.findById(id)
                .orElseThrow(() -> new ProductCategoryNotFoundException("ProductCategory with Product ID " + idProduct + " and Category ID " + idCategory + " not found"));

        // Perform updates as needed, e.g., if there are fields to update, set them here

        ProductCategory updatedProductCategory = productCategoryRepository.save(existingProductCategory);
        return productCategoryMapper.toProductCategoryDTO(updatedProductCategory);
    }

    public void deleteById(Integer idProduct, Integer idCategory) {
        ProductCategoryId id = new ProductCategoryId(idProduct, idCategory);
        if (!productCategoryRepository.existsById(id)) {
            throw new ProductCategoryNotFoundException("ProductCategory with Product ID " + idProduct + " and Category ID " + idCategory + " not found");
        }
        productCategoryRepository.deleteById(id);
    }

    public List<ProductCategoryDTO> findAll() {
        List<ProductCategory> productCategories = productCategoryRepository.findAll();
        return productCategories.stream()
                .map(productCategoryMapper::toProductCategoryDTO)
                .collect(Collectors.toList());
    }

    public List<ProductCategoryDTO> findByProductId(Integer productId) {
        List<ProductCategory> productCategories = productCategoryRepository.findByProductId(productId);
        return productCategories.stream()
                .map(productCategoryMapper::toProductCategoryDTO)
                .collect(Collectors.toList());
    }

    public List<ProductCategoryDTO> findByCategoryId(Integer categoryId) {
        List<ProductCategory> productCategories = productCategoryRepository.findByCategoryId(categoryId);
        return productCategories.stream()
                .map(productCategoryMapper::toProductCategoryDTO)
                .collect(Collectors.toList());
    }

    public List<ProductCategoryDTO> findAllOrderedByCategoryId() {
        List<ProductCategory> productCategories = productCategoryRepository.findAllOrderedByCategoryId();
        return productCategories.stream()
                .map(productCategoryMapper::toProductCategoryDTO)
                .collect(Collectors.toList());
    }
}
