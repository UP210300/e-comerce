package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ProductDTO getProductById(@PathVariable Integer id) {
        return productService.findById(id);
    }

    @PostMapping ("/addProduct")
    public ProductDTO createProduct(@RequestBody ProductDTO productDTO) {
        return productService.save(productDTO);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable Integer id, @RequestBody ProductDTO productDTO) {
        return productService.update(id, productDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteById(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategoryId(@PathVariable Integer categoryId) {
        return productService.findProductsByCategoryId(categoryId);
    }

    @GetMapping("/search")
    public List<ProductDTO> findProductsByName(@RequestParam String name) {
        return productService.findProductsByName(name);
    }

    @GetMapping("/stock")
    public List<ProductDTO> findProductsInStockGreaterThan(@RequestParam Integer stock) {
        return productService.findProductsInStockGreaterThan(stock);
    }

    @GetMapping("/category-count")
    public List<Object[]> countProductsByCategory() {
        return productService.countProductsByCategory();
    }

    @GetMapping("/top-expensive")
    public List<Object[]> findTopNMostExpensiveProducts(@RequestParam Integer limit) {
        return productService.findTopNMostExpensiveProducts(limit);

    }
}
