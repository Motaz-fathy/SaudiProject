/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const BaseURL = "https://megt.codecraft1.com/api";
  const navigate = useNavigate();

  // Load token from localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem("barhary-token-website");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Register function
  const register = async (userData) => {
    try {
      const { data } = await axios.post(`${BaseURL}/register`, userData);
      localStorage.setItem("barhary-token-website", data.token);
      setToken(data.token);
      navigate("/login");
      return data;
    } catch (error) {
      console.error("Registration Error:", error);
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const { data } = await axios.post(`${BaseURL}/login`, credentials);
      localStorage.setItem("barhary-token-website", data.token);
      setToken(data.token);
      return data;
    } catch (error) {
      console.error("Login Error:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Logout function
  const logout = async () => {
    localStorage.removeItem("barhary-token-website");
    setToken(null);
    navigate("/login");
  };

  // Forget Password function
  const forgetPassword = async (email) => {
    try {
      const { data } = await axios.post(`${BaseURL}/forget-password`, { email });
      navigate("/otp");
      return data;
    } catch (error) {
      console.error("Forget Password Error:", error);
      throw new Error(error.response?.data?.message || "Forget password failed");
    }
  };

  // Reset Password function
  const resetPassword = async ({ email, newPassword }) => {
    try {
      const { data } = await axios.post(`${BaseURL}/resetPassword`, { email, newPassword });
      return data;
    } catch (error) {
      console.error("Reset Password Error:", error);
      throw new Error(error.response?.data?.message || "Reset password failed");
    }
  };

  // Verify OTP function
  const verifyOtp = async ({ email, otp }) => {
    try {
      const { data } = await axios.post(`${BaseURL}/verifyOtp`, { email, otp });
      navigate("/login");
      return data;
    } catch (error) {
      console.error("Verify OTP Error:", error);
      throw new Error(error.response?.data?.message || "Verify OTP failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        register,
        login,
        logout,
        forgetPassword,
        resetPassword,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
