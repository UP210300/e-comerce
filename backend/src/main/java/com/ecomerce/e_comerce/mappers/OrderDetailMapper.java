package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.OrderDetailDTO;
import com.ecomerce.e_comerce.model.OrderDetail;
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
public interface OrderDetailMapper {

    @Mapping(target = "idOrder", source = "id.idOrder")
    @Mapping(target = "idProduct", source = "id.idProduct")
    OrderDetailDTO toOrderDetailDTO(OrderDetail orderDetail);

    @Mapping(target = "id.idOrder", source = "idOrder")
    @Mapping(target = "id.idProduct", source = "idProduct")
    OrderDetail toOrderDetail(OrderDetailDTO orderDetailDTO);

    @Named("orderDetailsDTOList")
    default List<OrderDetailDTO> toOrderDetailDtoList(List<OrderDetail> sourceList) {
        return sourceList.stream()
                         .map(this::toOrderDetailDTO)
                         .toList();
    }
}