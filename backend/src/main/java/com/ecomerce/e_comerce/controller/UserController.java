package com.ecomerce.e_comerce.controller;

import com.ecomerce.e_comerce.model.User;
import com.ecomerce.e_comerce.service.UserService;
import com.ecomerce.e_comerce.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String usernameOrEmail, @RequestParam String password) {
        // Autenticar al usuario
        return userService.loginUser(usernameOrEmail, password)
                .map(user -> {
                    // Generar el token JWT usando el ID del usuario autenticado
                    String token = JwtUtil.generateToken(user.getUserId());
                    // Retornar el token en formato JSON
                    return ResponseEntity.ok("{\"token\":\"" + token + "\", \"userId\":\"" + user.getUserId() + "\"}");
                })
                .orElseGet(() -> ResponseEntity.status(401).body("{\"message\": \"Invalid credentials\"}"));
    }
  
    @GetMapping({ "/getUser/{id}" })
    public ResponseEntity<Optional<User>> getCliente(@PathVariable Long id) {
      return ResponseEntity.ok(userService.getUser(id));
    }
}

