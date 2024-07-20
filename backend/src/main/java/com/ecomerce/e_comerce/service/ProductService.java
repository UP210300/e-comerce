package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void deleteById(Integer id) {
        productRepository.deleteById(id);
    }

    public List<Product> findProductsByCategoryId(Integer categoryId) {
        return productRepository.findProductsByCategoryId(categoryId);
    }
}
