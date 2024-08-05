package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.OrderDetailDTO;
import com.ecomerce.e_comerce.exception.OrderDetailNotFoundException;
import com.ecomerce.e_comerce.model.Order;
import com.ecomerce.e_comerce.model.OrderDetail;
import com.ecomerce.e_comerce.model.OrderDetailId;
import com.ecomerce.e_comerce.model.Product;
import com.ecomerce.e_comerce.repository.OrderDetailRepository;
import com.ecomerce.e_comerce.repository.OrderRepository;
import com.ecomerce.e_comerce.repository.ProductRepository;
import com.ecomerce.e_comerce.mappers.OrderDetailMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderDetailMapper orderDetailMapper;

    public OrderDetailDTO findById(Integer idOrder, Integer idProduct) throws OrderDetailNotFoundException{
        OrderDetailId id = new OrderDetailId(idOrder, idProduct);
        OrderDetail orderDetail = orderDetailRepository.findById(id)
                .orElseThrow(() -> new OrderDetailNotFoundException("OrderDetail with ID " + idOrder + " and Product ID " + idProduct + " not found"));
        return orderDetailMapper.toOrderDetailDTO(orderDetail);
    }

    public OrderDetailDTO save(OrderDetailDTO orderDetailDTO) throws OrderDetailNotFoundException{
        Order order = orderRepository.findById(orderDetailDTO.getIdOrder())
                .orElseThrow(() -> new OrderDetailNotFoundException("Order with ID " + orderDetailDTO.getIdOrder() + " not found"));
        Product product = productRepository.findById(orderDetailDTO.getIdProduct())
                .orElseThrow(() -> new OrderDetailNotFoundException("Product with ID " + orderDetailDTO.getIdProduct() + " not found"));

        OrderDetail orderDetail = orderDetailMapper.toOrderDetail(orderDetailDTO);
        orderDetail.setOrder(order);
        orderDetail.setProduct(product);

        OrderDetail savedOrderDetail = orderDetailRepository.save(orderDetail);
        return orderDetailMapper.toOrderDetailDTO(savedOrderDetail);
    }

    public OrderDetailDTO update(Integer idOrder, Integer idProduct, OrderDetailDTO orderDetailDTO) throws OrderDetailNotFoundException{
        OrderDetailId id = new OrderDetailId(idOrder, idProduct);
        OrderDetail existingOrderDetail = orderDetailRepository.findById(id)
                .orElseThrow(() -> new OrderDetailNotFoundException("OrderDetail with ID " + idOrder + " and Product ID " + idProduct + " not found"));

        existingOrderDetail.setPrice(orderDetailDTO.getPrice());
        existingOrderDetail.setQuantity(orderDetailDTO.getQuantity());

        OrderDetail updatedOrderDetail = orderDetailRepository.save(existingOrderDetail);
        return orderDetailMapper.toOrderDetailDTO(updatedOrderDetail);
    }

    public void deleteById(Integer idOrder, Integer idProduct) throws OrderDetailNotFoundException{
        OrderDetailId id = new OrderDetailId(idOrder, idProduct);
        if (!orderDetailRepository.existsById(id)) {
            throw new OrderDetailNotFoundException("OrderDetail with ID " + idOrder + " and Product ID " + idProduct + " not found");
        }
        orderDetailRepository.deleteById(id);
    }

    public List<OrderDetailDTO> findAll() {
        List<OrderDetail> orderDetails = orderDetailRepository.findAll();
        return orderDetails.stream()
                .map(orderDetailMapper::toOrderDetailDTO)
                .collect(Collectors.toList());
    }

    public List<OrderDetailDTO> findByOrderId(Integer orderId) {
        List<OrderDetail> orderDetails = orderDetailRepository.findByOrderId(orderId);
        return orderDetails.stream()
                .map(orderDetailMapper::toOrderDetailDTO)
                .collect(Collectors.toList());
    }

    public List<OrderDetailDTO> findByProductId(Integer productId) {
        List<OrderDetail> orderDetails = orderDetailRepository.findByProductId(productId);
        return orderDetails.stream()
                .map(orderDetailMapper::toOrderDetailDTO)
                .collect(Collectors.toList());
    }
}
