package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.CustomerDTO;
import com.ecomerce.e_comerce.exception.CustomerNotFoundException;
import com.ecomerce.e_comerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<CustomerDTO> getAllCustomers() {
        return customerService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable Integer id) throws CustomerNotFoundException {
        try {
            CustomerDTO customerDTO = customerService.findById(id);
            return ResponseEntity.ok(customerDTO);
        } catch (CustomerNotFoundException e) {
            throw new CustomerNotFoundException("Cliente no encontrado con id " + id);
        }
    }

    @PostMapping("/addCustomer")
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.save(customerDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(@PathVariable Integer id, @RequestBody CustomerDTO customerDTO) throws CustomerNotFoundException {
        try {
            CustomerDTO updatedCustomer = customerService.update(id, customerDTO);
            return ResponseEntity.ok(updatedCustomer);
        } catch (CustomerNotFoundException e) {
            throw new CustomerNotFoundException("Cliente no encontrado con id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Integer id) throws CustomerNotFoundException {
        try {
            customerService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (CustomerNotFoundException e) {
            throw new CustomerNotFoundException("Cliente no encontrado con id " + id);
        }
    }

    @GetMapping("/city/{city}")
    public List<CustomerDTO> getCustomersByCity(@PathVariable String city) {
        return customerService.findByCity(city);
    }

    @GetMapping("/country/{country}")
    public List<CustomerDTO> getCustomersByCountry(@PathVariable String country) {
        return customerService.findByCountry(country);
    }
}
