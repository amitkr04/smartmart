import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // Create the state
  const [user, setUser] = useState(null); // Store user information
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  }); // For registration form
  const [credentials, setCredentials] = useState({ email: "", password: "" }); // For login form

  const [isLoggedIn, setIsLoggedIn] = useState(false); // For login status

  // Handle form changes for registration
  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for registration
  const handleRegisterSubmit = (e, navigate) => {
    e.preventDefault();
    setUser(formData); // Simulate user registration
    console.log(setUser);
    alert("Registration successful!");
    navigate("/login"); // Redirect to login page
  };

  //Login part
  // Handle form changes for login
  const handleLoginChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission for login
  const handleLoginSubmit = (e, navigate) => {
    e.preventDefault();
    if (
      user &&
      credentials.email === user.email &&
      credentials.password === user.password
    ) {
      setIsLoggedIn(true); // Update login state
      alert(`Welcome back, ${user.username}!`);
      navigate("/"); // Redirect to home page
    } else {
      alert("Invalid email or password");
    }
  };

  //update user profile

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, ...formData }));
    alert("Profile updated successfully!");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        formData,
        credentials,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginChange,
        handleLoginSubmit,
        handleUpdateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
