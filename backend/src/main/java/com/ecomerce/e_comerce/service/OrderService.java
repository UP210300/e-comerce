package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.OrderDTO;
import com.ecomerce.e_comerce.exception.OrderNotFoundException;
import com.ecomerce.e_comerce.exception.ProductNotFoundException;
import com.ecomerce.e_comerce.model.Order;
import com.ecomerce.e_comerce.repository.OrderRepository;
import com.ecomerce.e_comerce.mappers.OrderMapper;
import com.ecomerce.e_comerce.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private CustomerRepository customerRepository;

    public List<OrderDTO> findAll() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(orderMapper::toOrderDTO)
                .collect(Collectors.toList());
    }

    public OrderDTO findById(Integer id)  throws OrderNotFoundException{
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new OrderNotFoundException("Order with ID " + id + " not found"));
        return orderMapper.toOrderDTO(order);
    }

    public OrderDTO save(OrderDTO orderDTO) {
        Order order = orderMapper.toOrder(orderDTO);
        Order savedOrder = orderRepository.save(order);
        return orderMapper.toOrderDTO(savedOrder);
    }

    public OrderDTO update(Integer id, OrderDTO orderDTO) throws OrderNotFoundException{
        Order existingOrder = orderRepository.findById(id)
                .orElseThrow(() -> new OrderNotFoundException("Order with ID " + id + " not found"));

        existingOrder.setCustomer(customerRepository.findById(orderDTO.getIdCustomer())
                .orElseThrow(() -> new IllegalArgumentException("Customer not found")));
        existingOrder.setAmount(orderDTO.getAmount());
        existingOrder.setShippingAddress(orderDTO.getShippingAddress());
        existingOrder.setOrderDate(orderDTO.getOrderDate());
        existingOrder.setOrderStatus(orderDTO.getOrderStatus());

        Order updatedOrder = orderRepository.save(existingOrder);
        return orderMapper.toOrderDTO(updatedOrder);
    }

    public List<OrderDTO> findOrdersByCustomerId(Integer idCustomer) {
        List<Order> orders = orderRepository.findByCustomerId(idCustomer);
        return orders.stream()
                .map(orderMapper::toOrderDTO)
                .collect(Collectors.toList());
    }

    public void deleteById(Integer id) throws OrderNotFoundException {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new OrderNotFoundException("Order with ID " + id + " not found");
        }
    }
}
