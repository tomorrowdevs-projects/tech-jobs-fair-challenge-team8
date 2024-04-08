package org.techchallengeteam8.phonebookserver.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.techchallengeteam8.phonebookserver.dtos.request.LoginRequest;
import org.techchallengeteam8.phonebookserver.dtos.request.SignupRequest;
import org.techchallengeteam8.phonebookserver.model.User;
import org.techchallengeteam8.phonebookserver.repositories.UserRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AuthServiceImplTest {
    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthServiceImpl authService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Test
    void signup() {
        long previousCount = userRepository.count();

        SignupRequest request = SignupRequest.builder().firstName("Jane").lastName("MMM").email("jane@user.com")
                .password("password").build();

        authService.signup(request);
        long currentCount = userRepository.count();
        assertEquals(previousCount + 1, currentCount);
    }

    @Test
    @Transactional
    void login() {
        User admin = User.builder().email("admin@admin.com").firstName("Marco").lastName("MMM")
                .password(passwordEncoder.encode("password")).role(User.Role.ROLE_ADMIN).build();
        userRepository.save(admin);

        LoginRequest request = LoginRequest.builder().email("admin@admin.com").password("password").build();
        var response = authService.login(request);
        assertEquals("admin@admin.com", response.getEmail());
        assertEquals("ROLE_ADMIN", response.getRole());

    }
}