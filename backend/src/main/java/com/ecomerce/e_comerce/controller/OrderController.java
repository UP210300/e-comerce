package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.OrderDTO;
import com.ecomerce.e_comerce.exception.OrderNotFoundException;
import com.ecomerce.e_comerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<OrderDTO> getAllOrders() {
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Integer id) throws OrderNotFoundException {
        try {
            OrderDTO orderDTO = orderService.findById(id);
            return ResponseEntity.ok(orderDTO);
        } catch (OrderNotFoundException e) {
            throw new OrderNotFoundException("Orden no encontrada con id " + id);
        }
    }

    @PostMapping("/addOrder")
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) {
        OrderDTO createdOrder = orderService.save(orderDTO);
        return ResponseEntity.ok(createdOrder);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDTO> updateOrder(@PathVariable Integer id, @RequestBody OrderDTO orderDTO) throws OrderNotFoundException {
        try {
            OrderDTO updatedOrder = orderService.update(id, orderDTO);
            return ResponseEntity.ok(updatedOrder);
        } catch (OrderNotFoundException e) {
            throw new OrderNotFoundException("Orden no encontrada con id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Integer id) throws OrderNotFoundException {
        orderService.deleteById(id);
    }

    @GetMapping("/by-customer/{idCustomer}")
    public List<OrderDTO> getOrdersByCustomerId(@PathVariable Integer idCustomer) {
        return orderService.findOrdersByCustomerId(idCustomer);
    }
}
