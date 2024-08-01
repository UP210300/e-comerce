package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.exception.ProductNotFoundException;
import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.repository.ProductRepository;
import com.ecomerce.e_comerce.mappers.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;

    public List<ProductDTO> findAll() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(productMapper::toProductDTO)
                .collect(Collectors.toList());
    }

    public ProductDTO findById(Integer id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
        return productMapper.toProductDTO(product);
    }

    public ProductDTO save(ProductDTO productDTO) {
        Product product = productMapper.toProduct(productDTO);
        Product savedProduct = productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    public ProductDTO update(Integer id, ProductDTO productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));

        existingProduct.setName(productDTO.getName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setStock(productDTO.getStock());
        existingProduct.setImages(productMapper.productImageDTOListToProductImageList(productDTO.getImages()));

        Product updatedProduct = productRepository.save(existingProduct);
        return productMapper.toProductDTO(updatedProduct);
    }

    public void deleteById(Integer id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Product with ID " + id + " not found");
        }
        productRepository.deleteById(id);
    }

    public List<Product> findProductsByCategoryId(Integer categoryId) {
        return productRepository.findProductsByCategoryId(categoryId);
    }

    public List<ProductDTO> findProductsByName(String name) {
        Collection<Product> products = productRepository.findProductsByName(name);
        return products.stream()
                       .map(productMapper::toProductDTO)
                       .collect(Collectors.toList());
    }

    public List<ProductDTO> findProductsInStockGreaterThan(Integer stock) {
        Collection<Product> products = productRepository.findProductsInStockGreaterThan(stock);
        return products.stream()
                       .map(productMapper::toProductDTO)
                       .collect(Collectors.toList());
    }
}
