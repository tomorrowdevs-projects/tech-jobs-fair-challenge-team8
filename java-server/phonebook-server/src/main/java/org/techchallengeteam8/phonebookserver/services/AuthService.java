package org.techchallengeteam8.phonebookserver.services;

import org.techchallengeteam8.phonebookserver.dtos.request.LoginRequest;
import org.techchallengeteam8.phonebookserver.dtos.request.SignupRequest;
import org.techchallengeteam8.phonebookserver.dtos.response.AuthResponse;

public interface AuthService {
    AuthResponse login(LoginRequest request);

    void signup(SignupRequest request);
}
