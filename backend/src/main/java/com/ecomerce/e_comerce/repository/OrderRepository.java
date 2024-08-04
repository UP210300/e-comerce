package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
        
    @Query(value = "SELECT * FROM orders WHERE id_customer = ?1", nativeQuery = true)
    List<Order> findByCustomerId(Integer idCustomer);
}
