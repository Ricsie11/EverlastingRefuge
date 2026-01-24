import { Routes, Route, useLocation } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import { AnimatePresence } from "framer-motion";

// Public
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Events from "../pages/public/Events";
import Contact from "../pages/public/Contact";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// User
import UserDashboard from "../pages/user/Dashboard";
import Group from "../pages/user/Group";
import ScanQR from "../pages/user/ScanQR";

// Admin
import AdminDashboard from "../dashboard/admin/Dashboard";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/group" element={<Group />} />
          <Route path="/scan" element={<ScanQR />} />

          <Route
            path="/admin"
            element={
              <RoleRoute allow={["ADMIN", "SUPERUSER"]}>
                <AdminDashboard />
              </RoleRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
