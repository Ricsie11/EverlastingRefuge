import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Events from "../pages/public/Events";
import Contact from "../pages/public/Contact";
import Live from "../pages/public/Live";
import Give from "../pages/public/Give";
import Login from "../pages/auth/Login";

import ProtectedRoute from "./ProtectedRoute";
import UserDashboard from "../pages/dashboard/user/UserDashboard";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import SuperuserDashboard from "../pages/dashboard/superuser/SuperuserDashboard";
import DashboardLayout from "@/app/components/layout/DashboardLayout";
import EventManager from "../pages/dashboard/admin/EventsManager";

import AdminQR from "../pages/dashboard/admin/AdminQR";

export default function AppRoutes() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboardRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/live" element={<Live />} />
        <Route path="/give" element={<Give />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard/user"
          element={
            <ProtectedRoute roles={["USER"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/admin/*"
          element={
            <ProtectedRoute roles={["ADMIN", "SUPERUSER"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/admin/qr"
          element={
            <ProtectedRoute roles={["ADMIN", "SUPERUSER"]}>
              <DashboardLayout showSidebar={true}>
                <AdminQR />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/superuser"
          element={
            <ProtectedRoute roles={["SUPERUSER"]}>
              <SuperuserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/events"
          element={
            <ProtectedRoute roles={["ADMIN", "SUPERUSER"]}>
              <DashboardLayout showSidebar={true}>
                <EventManager />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isDashboardRoute && <Footer />}
    </>
  );
}
