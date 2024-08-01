package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.CustomerDTO;
import com.ecomerce.e_comerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public CustomerDTO getCustomerById(@PathVariable Integer id) {
        return customerService.findById(id);
    }

    @PostMapping("/addCustomer")
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.save(customerDTO);
    }

    @PutMapping("/{id}")
    public CustomerDTO updateCustomer(@PathVariable Integer id, @RequestBody CustomerDTO customerDTO) {
        return customerService.update(id, customerDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Integer id) {
        customerService.deleteById(id);
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
