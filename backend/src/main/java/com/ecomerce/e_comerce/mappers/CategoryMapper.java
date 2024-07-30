package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.CategoryDTO;
import com.ecomerce.e_comerce.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface CategoryMapper {

  CategoryDTO toCategoryDTO(Category category);

  Category toCategory(CategoryDTO categoryDTO);

  @Named("categoriesDTOList")
  default List<CategoryDTO> toCategoryDtoList(List<Category> sourceList) {
    return sourceList
        .stream()
        .map(this::toCategoryDTO)
        .toList();
  }
}
