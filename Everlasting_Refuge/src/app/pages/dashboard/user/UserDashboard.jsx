import DashboardLayout from "@/app/components/layout/DashboardLayout";
import UserOverview from "./UserOverview";

export default function UserDashboard() {
  return (
    <DashboardLayout>
      <UserOverview />
    </DashboardLayout>
  );
}