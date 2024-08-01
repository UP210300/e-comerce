// UserDTO.java
package com.ecomerce.e_comerce.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long userId;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String role;
}
