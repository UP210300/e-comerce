package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.dto.UserDTO;
import com.ecomerce.e_comerce.service.UserService;
import com.ecomerce.e_comerce.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        UserDTO registeredUser = userService.registerUser(userDTO);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String usernameOrEmail, @RequestParam String password) {
        return userService.loginUser(usernameOrEmail, password)
                .map(user -> {
                    String token = JwtUtil.generateToken(user.getUserId());
                    return ResponseEntity.ok("{\"token\":\"" + token + "\", \"userId\":\"" + user.getUserId() + "\"}");
                })
                .orElseGet(() -> ResponseEntity.status(401).body("{\"message\": \"Invalid credentials\"}"));
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        // Puedes usar el método que lanza excepción o el que devuelve Optional
        return ResponseEntity.ok(userService.getUser(id));
    }
}
