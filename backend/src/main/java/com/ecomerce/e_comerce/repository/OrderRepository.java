package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    
    // Consulta SQL personalizada para obtener pedidos ordenados por fecha de creación (más reciente primero)
    @Query(value = "SELECT * FROM orders ORDER BY order_date DESC", nativeQuery = true)
    List<Order> findAllOrderedByDate();

    // Consulta SQL personalizada para obtener pedidos ordenados por ID de cliente
    @Query(value = "SELECT * FROM orders ORDER BY id_customer ASC", nativeQuery = true)
    List<Order> findAllOrderedByCustomerId();
    
    // Consulta SQL personalizada para obtener pedidos por ID de cliente
    @Query(value = "SELECT * FROM orders WHERE id_customer = ?1", nativeQuery = true)
    List<Order> findByCustomerId(Integer idCustomer);
}
