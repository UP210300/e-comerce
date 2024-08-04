package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.OrderDetail;
import com.ecomerce.e_comerce.model.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {

    @Query(value = "SELECT * FROM order_details WHERE id_order = ?1", nativeQuery = true)
    List<OrderDetail> findByOrderId(Integer orderId);

    @Query(value = "SELECT * FROM order_details WHERE id_product = ?1", nativeQuery = true)
    List<OrderDetail> findByProductId(Integer productId);

}
