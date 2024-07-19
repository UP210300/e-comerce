package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.model.User;
import com.ecomerce.e_comerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
            Pattern.CASE_INSENSITIVE
    );

    public User registerUser(User user) {
        // No codificamos la contraseña, la almacenamos tal cual
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String usernameOrEmail, String password) {
        Optional<User> userOptional;

        if (EMAIL_PATTERN.matcher(usernameOrEmail).matches()) {
            // Es un correo electrónico
            userOptional = userRepository.findByEmail(usernameOrEmail);
        } else {
            // Es un nombre de usuario
            userOptional = userRepository.findByUsername(usernameOrEmail);
        }

        if (userOptional.isPresent() && password.equals(userOptional.get().getPassword())) {
            return userOptional;
        }
        return Optional.empty();
    }
}
