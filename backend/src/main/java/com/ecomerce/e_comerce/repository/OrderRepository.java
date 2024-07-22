package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
