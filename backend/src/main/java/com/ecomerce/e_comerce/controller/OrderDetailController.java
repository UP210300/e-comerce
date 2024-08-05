package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.OrderDetailDTO;
import com.ecomerce.e_comerce.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-details")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @PostMapping("/{idOrder}/{idProduct}")
    public OrderDetailDTO createOrderDetail(@PathVariable Integer idOrder, 
                                             @PathVariable Integer idProduct, 
                                             @RequestBody OrderDetailDTO orderDetailDTO) {

        orderDetailDTO.setIdOrder(idOrder);
        orderDetailDTO.setIdProduct(idProduct);
        return orderDetailService.save(orderDetailDTO);
    }

    @PutMapping("/{idOrder}/{idProduct}")
    public OrderDetailDTO updateOrderDetail(@PathVariable Integer idOrder, 
                                             @PathVariable Integer idProduct, 
                                             @RequestBody OrderDetailDTO orderDetailDTO) {

        orderDetailDTO.setIdOrder(idOrder);
        orderDetailDTO.setIdProduct(idProduct);
        return orderDetailService.update(idOrder, idProduct, orderDetailDTO);
    }

    @DeleteMapping("/{idOrder}/{idProduct}")
    public void deleteOrderDetail(@PathVariable Integer idOrder, @PathVariable Integer idProduct) {
        orderDetailService.deleteById(idOrder, idProduct);
    }

    @GetMapping("/{idOrder}/{idProduct}")
    public OrderDetailDTO getOrderDetailById(@PathVariable Integer idOrder, @PathVariable Integer idProduct) {
        return orderDetailService.findById(idOrder, idProduct);
    }

    @GetMapping
    public List<OrderDetailDTO> getAllOrderDetails() {
        return orderDetailService.findAll();
    }

    @GetMapping("/order/{idOrder}")
    public List<OrderDetailDTO> getOrderDetailsByOrderId(@PathVariable Integer idOrder) {
        return orderDetailService.findByOrderId(idOrder);
    }

    @GetMapping("/product/{idProduct}")
    public List<OrderDetailDTO> getOrderDetailsByProductId(@PathVariable Integer idProduct) {
        return orderDetailService.findByProductId(idProduct);
    }

    @GetMapping("/priceDesc")
    public List<OrderDetailDTO> getAllOrderDetailsOrderedByPriceDesc() {
        return orderDetailService.findAllOrderedByPriceDesc();
    }
}