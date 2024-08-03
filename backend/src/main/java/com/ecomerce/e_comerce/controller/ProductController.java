package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.exception.ProductNotFoundException;
import com.ecomerce.e_comerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Integer id)  throws ProductNotFoundException {
        try {
            ProductDTO productDTO = productService.findById(id);
            return ResponseEntity.ok(productDTO);
           } catch (ProductNotFoundException e) {
            throw new ProductNotFoundException("Producto no encontrado con id " + id );
        }
    }

    @PostMapping("/addProduct")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        ProductDTO createdProduct = productService.save(productDTO);
        return ResponseEntity.ok(createdProduct);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable Integer id, @RequestBody ProductDTO productDTO) throws ProductNotFoundException{
        try {
            System.out.println("Received request to update product with ID: " + id);
            ProductDTO updatedProduct = productService.update(id, productDTO);
            System.out.println("Product updated successfully: " + updatedProduct);
            return updatedProduct;
        } catch (ProductNotFoundException e) {
            // Manejo de excepción específica
            System.err.println("Product not found: " + e.getMessage());
            throw e;  // o devuelve una respuesta adecuada
        } catch (Exception e) {
            // Manejo de cualquier otra excepción
            System.err.println("Unexpected error occurred: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Ocurrió un error inesperado...", e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) throws ProductNotFoundException{
        try {
            productService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ProductNotFoundException e) {
            throw new ProductNotFoundException("Producto no encontrado con id " + id );
        }
    }
}
