package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.CustomerDTO;
import com.ecomerce.e_comerce.model.Customer;
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
public interface CustomerMapper {

  @Mapping(target = "user", ignore = true)
  CustomerDTO toCustomerDTO(Customer customer);

  @Mapping(target = "user", ignore = true)
  Customer toCustomer(CustomerDTO customerDTO);

  @Named("customersDTOList")
  default List<CustomerDTO> toCustomerDtoList(List<Customer> sourceList) {
    return sourceList
        .stream()
        .map(this::toCustomerDTO)
        .toList();
  }
}
