package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.ProductDTO;
import com.ecomerce.e_comerce.model.Product;
import org.mapstruct.Mapper;
//import org.mapstruct.Mapping;
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
  
  //@Mapping(target = "idProduct", ignore = true)
  ProductDTO toProductDTO(Product product);

  Product toProduct(ProductDTO productDTO);

  @Named("productsDTOList")
  default List<ProductDTO> toProductDtoList(List<Product> sourceList) {
    return sourceList
        .stream()
        .map(this::toProductDTO)
        .toList();
  }
}