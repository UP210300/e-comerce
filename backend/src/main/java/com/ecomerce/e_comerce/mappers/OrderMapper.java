package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.OrderDTO;
import com.ecomerce.e_comerce.model.Order;
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
public interface OrderMapper {

  @Mapping(target = "idOrder", ignore = true)
  OrderDTO toOrderDTO(Order order);

  Order toOrder(OrderDTO orderDTO);

  @Named("ordersDTOList")
  default List<OrderDTO> toOrderDtoList(List<Order> sourceList) {
    return sourceList
        .stream()
        .map(this::toOrderDTO)
        .toList();
  }
}
