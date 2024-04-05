import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./user-management/UserProvider";
import Header from "./components/Header";
import ContactsView from "./views/ContactsView";
import ContactFormView from "./views/ContactFormView";
import UserRoute from "./route-guards/UserRoute";
import AdminRoute from "./route-guards/AdminRoute";
import SignupForm from "./components/SignupForm";
import LoginView from "./views/LoginView";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginView />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route
            path="/contacts/add"
            element={<AdminRoute element={<ContactFormView />} />}
          />
          <Route
            path="/contacts"
            element={<UserRoute element={<ContactsView />} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
