import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./user-management/UserProvider";
import Header from "./components/Header";
import ContactsView from "./views/ContactsView";
import ContactFormView from "./views/ContactFormView";
import UserRoute from "./route-guards/UserRoute";
import AdminRoute from "./route-guards/AdminRoute";
import PublicRoute from "./route-guards/PublicRoute";
import RegisterUserForm from "./components/RegisterUserForm";
import LoginView from "./views/LoginView";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" replace />} />
          <Route
            path="/login"
            element={<PublicRoute element={<LoginView />} />}
          ></Route>
          <Route
            path="/register-user"
            element={<AdminRoute element={<RegisterUserForm />} />}
          ></Route>
          <Route
            path="/contacts/add"
            element={<AdminRoute element={<ContactFormView />} />}
          />
          <Route
            path="/contacts/edit"
            element={<AdminRoute element={<ContactFormView />} />}
          />
          <Route
            path="/contacts"
            element={<UserRoute element={<ContactsView />} />}
          ></Route>
          <Route path="*" element={<Navigate to="/contacts" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
