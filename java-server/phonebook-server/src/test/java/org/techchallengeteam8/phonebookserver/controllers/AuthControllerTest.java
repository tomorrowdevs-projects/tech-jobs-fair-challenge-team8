package org.techchallengeteam8.phonebookserver.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.techchallengeteam8.phonebookserver.dtos.request.LoginRequest;
import org.techchallengeteam8.phonebookserver.dtos.request.SignupRequest;
import org.techchallengeteam8.phonebookserver.model.User;
import org.techchallengeteam8.phonebookserver.repositories.UserRepository;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @Transactional
    void login() throws Exception {
        var admin = User.builder().email("admin@admin.com").firstName("Marco").lastName("Marquez")
                .password(passwordEncoder.encode("password")).role(User.Role.ROLE_ADMIN).build();
        userRepository.save(admin);

        var loginRequest = LoginRequest.builder().email("admin@admin.com").password("password").build();

        mockMvc.perform(post("/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("admin@admin.com"));
    }

    @Test
    void signup() throws Exception {
        var signupRequest = SignupRequest.builder().email("user@user.com").firstName("Jane").lastName("Marquez")
                .password("password").build();

        mockMvc.perform(post("/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signupRequest)))
                .andExpect(status().is(201));
    }
}