package org.techchallengeteam8.phonebookserver.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.techchallengeteam8.phonebookserver.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.techchallengeteam8.phonebookserver.dtos.request.LoginRequest;
import org.techchallengeteam8.phonebookserver.dtos.request.SignupRequest;
import org.techchallengeteam8.phonebookserver.dtos.response.AuthResponse;
import org.techchallengeteam8.phonebookserver.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow(
                () -> new EntityNotFoundException("User not found"));
        var token = jwtService.generateToken(user);
        return AuthResponse.builder().token(token).email(user.getEmail()).firstName(user.getFirstName())
                .lastName(user.getLastName()).role(String.valueOf(user.getRole())).build();
    }

    @Override
    public void signup(SignupRequest request) {
        var user = User.builder().email(request.getEmail()).firstName(request.getFirstName())
                .lastName(request.getLastName()).password(passwordEncoder.encode(request.getPassword()))
                .role(User.Role.ROLE_USER).build();
        userRepository.save(user);
    }
}
