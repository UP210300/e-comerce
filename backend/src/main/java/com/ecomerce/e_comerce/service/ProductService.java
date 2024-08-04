package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.exception.ProductNotFoundException;
import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.model.ProductImage;
import com.ecomerce.e_comerce.repository.ProductRepository;
import com.ecomerce.e_comerce.mappers.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Collection;

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

    public ProductDTO findById(Integer id) throws ProductNotFoundException {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
        return productMapper.toProductDTO(product);
    }

    public ProductDTO save(ProductDTO productDTO) {
        Product product = productMapper.toProduct(productDTO);
        if (product.getImages() != null) {
            for (ProductImage image : product.getImages()) {
                image.setProduct(product);
            }
        }
        Product savedProduct = productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    public ProductDTO update(Integer id, ProductDTO productDTO) throws ProductNotFoundException {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));

        existingProduct.setName(productDTO.getName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setStock(productDTO.getStock());

        List<ProductImage> productImages = productMapper.productImageDTOListToProductImageList(productDTO.getImages());
        if (productImages != null && !productImages.isEmpty()) {
            for (ProductImage image : productImages) {
                image.setProduct(existingProduct);
            }
            existingProduct.setImages(productImages);
        } else {
            existingProduct.setImages(null);
        }

        Product updatedProduct = productRepository.save(existingProduct);
        return productMapper.toProductDTO(updatedProduct);
    }

    public void deleteById(Integer id) throws ProductNotFoundException {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Product with ID " + id + " not found");
        }
        productRepository.deleteById(id);
    }

    public List<ProductDTO> findProductsByName(String name) {
        Collection<Product> products = productRepository.findProductsByName(name);
        return products.stream()
                       .map(productMapper::toProductDTO)
                       .collect(Collectors.toList());
    }
}
