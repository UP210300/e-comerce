package com.ecomerce.e_comerce.mappers;

import com.ecomerce.e_comerce.dto.OrderDTO;
import com.ecomerce.e_comerce.model.Customer;
import com.ecomerce.e_comerce.model.Order;
import com.ecomerce.e_comerce.repository.CustomerRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public abstract class OrderMapper {

    @Autowired
    private CustomerRepository customerRepository;

    @Mapping(target = "idOrder", source = "order.idOrder")
    @Mapping(target = "idCustomer", source = "order.customer.idCustomer")
    public abstract OrderDTO toOrderDTO(Order order);

    @Mapping(target = "customer", source = "idCustomer", qualifiedByName = "customerFromId")
    public abstract Order toOrder(OrderDTO orderDTO);

    @Named("customerFromId")
    protected Customer customerFromId(Integer idCustomer) {
        return customerRepository.findById(idCustomer)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
    }

    @Named("ordersDTOList")
    public List<OrderDTO> toOrderDtoList(List<Order> sourceList) {
        return sourceList
                .stream()
                .map(this::toOrderDTO)
                .toList();
    }
}