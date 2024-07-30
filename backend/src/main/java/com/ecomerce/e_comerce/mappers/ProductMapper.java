package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.dto.ProductImageDTO;
import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.model.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface ProductMapper {

  @Mapping(target = "images", source = "images", qualifiedByName = "productImageListToProductImageDTOList")
  ProductDTO toProductDTO(Product product);

  @Mapping(target = "images", source = "images", qualifiedByName = "productImageDTOListToProductImageList")
  Product toProduct(ProductDTO productDTO);

  @Named("productImageListToProductImageDTOList")
  default List<ProductImageDTO> productImageListToProductImageDTOList(List<ProductImage> images) {
    return images
        .stream()
        .map(this::toProductImageDTO)
        .toList();
  }

  @Named("productImageDTOListToProductImageList")
  default List<ProductImage> productImageDTOListToProductImageList(List<ProductImageDTO> imageDTOs) {
    return imageDTOs
        .stream()
        .map(this::toProductImage)
        .toList();
  }

  ProductImageDTO toProductImageDTO(ProductImage productImage);

  ProductImage toProductImage(ProductImageDTO productImageDTO);

  @Named("productsDTOList")
  default List<ProductDTO> toProductDtoList(List<Product> sourceList) {
    return sourceList
        .stream()
        .map(this::toProductDTO)
        .toList();
  }
}
