package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.ProductCategoryDTO;
import com.ecomerce.e_comerce.model.ProductCategory;
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
public interface ProductCategoryMapper {

    @Mapping(target = "idProduct", source = "id.idProduct")
    @Mapping(target = "idCategory", source = "id.idCategory")
    ProductCategoryDTO toProductCategoryDTO(ProductCategory productCategory);

    @Mapping(target = "id.idProduct", source = "idProduct")
    @Mapping(target = "id.idCategory", source = "idCategory")
    ProductCategory toProductCategory(ProductCategoryDTO productCategoryDTO);

    @Named("productCategoriesDTOList")
    default List<ProductCategoryDTO> toProductCategoryDtoList(List<ProductCategory> sourceList) {
        return sourceList.stream()
                         .map(this::toProductCategoryDTO)
                         .toList();
    }
}
