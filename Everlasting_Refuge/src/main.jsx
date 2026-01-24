import { StrictMode } from 'react'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";
import { AuthProvider } from "./app/context/AuthContext";
import { RoleProvider } from "./app/context/RoleContext";
import { ThemeProvider } from "./app/context/ThemeContext";
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <RoleProvider>
            <App />
            <AppRoutes />
          </RoleProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);