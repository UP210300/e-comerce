package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.ProductCategoryDTO;
import com.ecomerce.e_comerce.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-categories")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @PostMapping("/add")
    public ProductCategoryDTO createProductCategory(@RequestBody ProductCategoryDTO productCategoryDTO) {
        return productCategoryService.save(productCategoryDTO);
    }

    @PutMapping("/{idProduct}/{idCategory}")
    public ProductCategoryDTO updateProductCategory(@PathVariable Integer idProduct, 
                                                     @PathVariable Integer idCategory, 
                                                     @RequestBody ProductCategoryDTO productCategoryDTO) {
        return productCategoryService.update(idProduct, idCategory, productCategoryDTO);
    }

    @DeleteMapping("/{idProduct}/{idCategory}")
    public void deleteProductCategory(@PathVariable Integer idProduct, @PathVariable Integer idCategory) {
        productCategoryService.deleteById(idProduct, idCategory);
    }

    @GetMapping("/{idProduct}/{idCategory}")
    public ProductCategoryDTO getProductCategoryById(@PathVariable Integer idProduct, @PathVariable Integer idCategory) {
        return productCategoryService.findById(idProduct, idCategory);
    }

    @GetMapping
    public List<ProductCategoryDTO> getAllProductCategories() {
        return productCategoryService.findAll();
    }

    @GetMapping("/product/{productId}")
    public List<ProductCategoryDTO> getProductCategoriesByProductId(@PathVariable Integer productId) {
        return productCategoryService.findByProductId(productId);
    }

    @GetMapping("/category/{categoryId}")
    public List<ProductCategoryDTO> getProductCategoriesByCategoryId(@PathVariable Integer categoryId) {
        return productCategoryService.findByCategoryId(categoryId);
    }

}
