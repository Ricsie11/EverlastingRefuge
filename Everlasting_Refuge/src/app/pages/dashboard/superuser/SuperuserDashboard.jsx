import DashboardLayout from "@/app/components/layout/DashboardLayout";
import SuperuserOverview from "./SuperUserOverview";

export default function SuperuserDashboard() {
  return (
    <DashboardLayout>
      <SuperuserOverview />
    </DashboardLayout>
  );
}