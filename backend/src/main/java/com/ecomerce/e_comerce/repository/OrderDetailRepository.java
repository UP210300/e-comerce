package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.OrderDetail;
import com.ecomerce.e_comerce.model.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {
}
