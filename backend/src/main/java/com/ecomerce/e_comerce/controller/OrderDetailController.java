package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.OrderDetailDTO;
import com.ecomerce.e_comerce.exception.OrderDetailNotFoundException;
import com.ecomerce.e_comerce.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-details")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @PostMapping("/add")
    public ResponseEntity<OrderDetailDTO> createOrderDetail(@RequestBody OrderDetailDTO orderDetailDTO)  throws OrderDetailNotFoundException{
        try {
            OrderDetailDTO createdOrderDetail = orderDetailService.save(orderDetailDTO);
            return ResponseEntity.ok(createdOrderDetail);
        } catch (OrderDetailNotFoundException e) {
            throw new OrderDetailNotFoundException("No se pudo crear el detalle de la orden");
        }
    }


    @PutMapping("/{idOrder}/{idProduct}")
    public ResponseEntity<OrderDetailDTO> updateOrderDetail(@PathVariable Integer idOrder, 
                                                            @PathVariable Integer idProduct, 
                                                            @RequestBody OrderDetailDTO orderDetailDTO) throws OrderDetailNotFoundException {
        try {
            OrderDetailDTO updatedOrderDetail = orderDetailService.update(idOrder, idProduct, orderDetailDTO);
            return ResponseEntity.ok(updatedOrderDetail);
        } catch (OrderDetailNotFoundException e) {
            throw new OrderDetailNotFoundException("Detalle de orden no encontrado con id de orden " + idOrder + " y id de producto " + idProduct);
        }
    }

    @DeleteMapping("/{idOrder}/{idProduct}")
    public ResponseEntity<Void> deleteOrderDetail(@PathVariable Integer idOrder, @PathVariable Integer idProduct) throws OrderDetailNotFoundException {
        try {
            orderDetailService.deleteById(idOrder, idProduct);
            return ResponseEntity.noContent().build();
        } catch (OrderDetailNotFoundException e) {
            throw new OrderDetailNotFoundException("Detalle de orden no encontrado con id de orden " + idOrder + " y id de producto " + idProduct);
        }
    }

    @GetMapping("/{idOrder}/{idProduct}")
    public ResponseEntity<OrderDetailDTO> getOrderDetailById(@PathVariable Integer idOrder, @PathVariable Integer idProduct) throws OrderDetailNotFoundException {
        try {
            OrderDetailDTO orderDetailDTO = orderDetailService.findById(idOrder, idProduct);
            return ResponseEntity.ok(orderDetailDTO);
        } catch (OrderDetailNotFoundException e) {
            throw new OrderDetailNotFoundException("Detalle de orden no encontrado con id de orden " + idOrder + " y id de producto " + idProduct);
        }
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
}
