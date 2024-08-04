package com.ecomerce.e_comerce.repository;

import com.ecomerce.e_comerce.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "SELECT * FROM customers WHERE city = ?1", nativeQuery = true)
    List<Customer> findByCity(String city);

    @Query(value = "SELECT * FROM customers WHERE country = ?1", nativeQuery = true)
    List<Customer> findByCountry(String country);
}

