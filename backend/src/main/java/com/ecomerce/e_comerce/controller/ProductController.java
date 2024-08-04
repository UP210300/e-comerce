package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.exception.ProductNotFoundException;
import com.ecomerce.e_comerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Integer id) throws ProductNotFoundException {
        try {
            ProductDTO productDTO = productService.findById(id);
            return ResponseEntity.ok(productDTO);
        } catch (ProductNotFoundException e) {
            throw new ProductNotFoundException("Producto no encontrado con id " + id);
        }
    }

    @PostMapping("/addProduct")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        ProductDTO createdProduct = productService.save(productDTO);
        return ResponseEntity.ok(createdProduct);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable Integer id, @RequestBody ProductDTO productDTO) throws ProductNotFoundException {
        try {
            ProductDTO updatedProduct = productService.update(id, productDTO);
            return updatedProduct;
        } catch (ProductNotFoundException e) {
            throw new ProductNotFoundException("Producto no actualizado con id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) throws ProductNotFoundException {
        try {
            productService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ProductNotFoundException e) {
            throw new ProductNotFoundException("Producto no encontrado con id " + id);
        }
    }

    @GetMapping("/top-selling")
    public List<ProductDTO> getTopSellingProducts() {
        return productService.getTopSellingProducts();
    }

    @GetMapping("/least-selling")
    public List<ProductDTO> getLeastSellingProducts() {
        return productService.getLeastSellingProducts();
    }

    @GetMapping("/by-category")
    public List<ProductDTO> getProductsByCategory(@RequestParam Integer categoryId) {
        return productService.getProductsByCategory(categoryId);
    }
}
