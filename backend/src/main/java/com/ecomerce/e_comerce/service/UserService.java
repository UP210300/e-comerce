package com.ecomerce.e_comerce.service;

import com.ecomerce.e_comerce.model.User;
import com.ecomerce.e_comerce.repository.UserRepository;
import com.ecomerce.e_comerce.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("customer");
        }
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String usernameOrEmail, String password) {
        Optional<User> userOptional;

        if (EMAIL_PATTERN.matcher(usernameOrEmail).matches()) {
            userOptional = userRepository.findByEmail(usernameOrEmail);
        } else {
            userOptional = userRepository.findByUsername(usernameOrEmail);
        }

        if (userOptional.isPresent() && password.equals(userOptional.get().getPassword())) {
            return userOptional;
        }
        return Optional.empty();
    }

    public Optional<User> getUser(long id) {
        return userRepository.findById(id);
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }

    public List<User> getUsersByFirstName(String firstName) {
        return userRepository.findByFirstName(firstName);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id " + id));
        
        if (userDetails.getUsername() != null) user.setUsername(userDetails.getUsername());
        if (userDetails.getEmail() != null) user.setEmail(userDetails.getEmail());
        if (userDetails.getFirstName() != null) user.setFirstName(userDetails.getFirstName());
        if (userDetails.getLastName() != null) user.setLastName(userDetails.getLastName());
        if (userDetails.getRole() != null) user.setRole(userDetails.getRole());
        if (userDetails.getPassword() != null) user.setPassword(userDetails.getPassword());

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new UserNotFoundException("User not found with id " + id);
        }
    }
}
