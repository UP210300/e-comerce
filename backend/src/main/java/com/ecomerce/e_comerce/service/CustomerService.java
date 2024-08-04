package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.CustomerDTO;
import com.ecomerce.e_comerce.exception.CustomerNotFoundException;
import com.ecomerce.e_comerce.model.Customer;
import com.ecomerce.e_comerce.repository.CustomerRepository;
import com.ecomerce.e_comerce.mappers.CustomerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerMapper customerMapper;

    public List<CustomerDTO> findAll() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream()
                .map(customerMapper::toCustomerDTO)
                .collect(Collectors.toList());
    }

    public CustomerDTO findById(Integer id) throws CustomerNotFoundException{
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Customer with ID " + id + " not found"));
        return customerMapper.toCustomerDTO(customer);
    }

    public CustomerDTO save(CustomerDTO customerDTO) {
        Customer customer = customerMapper.toCustomer(customerDTO);
        Customer savedCustomer = customerRepository.save(customer);
        return customerMapper.toCustomerDTO(savedCustomer);
    }

    public CustomerDTO update(Integer id, CustomerDTO customerDTO) throws CustomerNotFoundException{
        Customer existingCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Customer with ID " + id + " not found"));

        existingCustomer.setAddress(customerDTO.getAddress());
        existingCustomer.setCountry(customerDTO.getCountry());
        existingCustomer.setCity(customerDTO.getCity());
        existingCustomer.setPhone(customerDTO.getPhone());

        Customer updatedCustomer = customerRepository.save(existingCustomer);
        return customerMapper.toCustomerDTO(updatedCustomer);
    }

    public void deleteById(Integer id) throws CustomerNotFoundException{
        if (!customerRepository.existsById(id)) {
            throw new CustomerNotFoundException("Customer with ID " + id + " not found");
        }
        customerRepository.deleteById(id);
    }

    public List<CustomerDTO> findByCity(String city) {
        List<Customer> customers = customerRepository.findByCity(city);
        return customers.stream()
                .map(customerMapper::toCustomerDTO)
                .collect(Collectors.toList());
    }

    public List<CustomerDTO> findByCountry(String country) {
        List<Customer> customers = customerRepository.findByCountry(country);
        return customers.stream()
                .map(customerMapper::toCustomerDTO)
                .collect(Collectors.toList());
    }
}
