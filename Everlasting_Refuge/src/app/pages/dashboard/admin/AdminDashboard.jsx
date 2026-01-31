import DashboardLayout from "@/app/components/layout/DashboardLayout";
import AdminOverview from "./AdminOverview";
import AdminQR from "./AdminQR";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      {/* <AdminQR /> */}
      <AdminOverview />
    </DashboardLayout>
  );
}