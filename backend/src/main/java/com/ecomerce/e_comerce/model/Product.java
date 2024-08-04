package com.ecomerce.e_comerce.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "id_product")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduct;

    @NotEmpty
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "description", length = 255)
    private String description;

    @NotNull
    @Column(name = "price", nullable = false, precision = 10)
    private Float price;

    @NotNull
    @Column(name = "stock", nullable = false)
    private Integer stock;

    @ManyToOne
    @JoinColumn(name = "id_category", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductImage> images;
    
    public void setImages(List<ProductImage> images) {
        this.images = images;
        if (images != null) {
            for (ProductImage image : images) {
                image.setProduct(this);
            }
        }
    }
}
