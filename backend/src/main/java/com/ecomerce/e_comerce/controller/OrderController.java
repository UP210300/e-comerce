package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.OrderDTO;
import com.ecomerce.e_comerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public OrderDTO getOrderById(@PathVariable Integer id) {
        return orderService.findById(id);
    }

    @PostMapping ("/addOrder")
    public OrderDTO createOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.save(orderDTO);
    }

    @PutMapping("/{id}")
    public OrderDTO updateOrder(@PathVariable Integer id, @RequestBody OrderDTO orderDTO) {
        return orderService.update(id, orderDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Integer id) {
        orderService.deleteById(id);
    }

    @GetMapping("/sorted-by-date")
    public List<OrderDTO> getOrdersSortedByDate() {
        return orderService.findAllSortedByDate();
    }

    @GetMapping("/sorted-by-customer-id")
    public List<OrderDTO> getOrdersSortedByCustomerId() {
        return orderService.findAllSortedByCustomerId();
    }

    @GetMapping("/by-customer/{idCustomer}")
    public List<OrderDTO> getOrdersByCustomerId(@PathVariable Integer idCustomer) {
        return orderService.findOrdersByCustomerId(idCustomer);
    }
}
