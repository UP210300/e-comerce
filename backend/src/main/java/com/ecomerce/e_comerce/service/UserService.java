package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.dto.UserDTO;
import com.ecomerce.e_comerce.exception.UserAlreadyExistsException;
import com.ecomerce.e_comerce.exception.UserNotFoundException;
import com.ecomerce.e_comerce.exception.InvalidPasswordException;
import com.ecomerce.e_comerce.exception.InvalidInputException;
import com.ecomerce.e_comerce.model.User;
import com.ecomerce.e_comerce.repository.UserRepository;
import com.ecomerce.e_comerce.mappers.UserMapper;
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

    // Método que lanza una excepción si el usuario no se encuentra
    public UserDTO getUser(long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id " + id));
        return UserMapper.toDTO(user);
    }

    // Método que devuelve un Optional
    public Optional<UserDTO> getUserOptional(long id) {
        return userRepository.findById(id)
                .map(UserMapper::toDTO);
    }

    public UserDTO registerUser(UserDTO userDTO) {
        if (!EMAIL_PATTERN.matcher(userDTO.getEmail()).matches()) {
            throw new InvalidInputException("Invalid email format: " + userDTO.getEmail());
        }

        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("Email already exists: " + userDTO.getEmail());
        }

        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("Username already exists: " + userDTO.getUsername());
        }

        User user = UserMapper.toEntity(userDTO);
        // Handle password hashing here if needed
        User savedUser = userRepository.save(user);
        return UserMapper.toDTO(savedUser);
    }

    public Optional<UserDTO> loginUser(String usernameOrEmail, String password) {
        Optional<User> userOptional = EMAIL_PATTERN.matcher(usernameOrEmail).matches()
                ? userRepository.findByEmail(usernameOrEmail)
                : userRepository.findByUsername(usernameOrEmail);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (!password.equals(user.getPassword())) {
                throw new InvalidPasswordException("Incorrect password for user " + usernameOrEmail);
            }
            return Optional.of(UserMapper.toDTO(user));
        } else {
            throw new UserNotFoundException("User not found with username or email: " + usernameOrEmail);
        }
    }
}
