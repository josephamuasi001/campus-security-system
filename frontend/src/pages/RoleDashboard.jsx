import { useAuth } from "../context/AuthContext";

function RoleDashboard() {
  const { profile } = useAuth();

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  switch (profile.role) {
    case "student":
      return <h1>Student Dashboard</h1>;

    case "staff":
      return <h1>Staff Dashboard</h1>;

    case "security_officer":
      return <h1>Security Officer Dashboard</h1>;

    case "security_supervisor":
      return <h1>Security Supervisor Dashboard</h1>;

    case "management":
      return <h1>Management Dashboard</h1>;

    case "admin":
      return <h1>Admin Dashboard</h1>;

    default:
      return <h1>Unknown Role</h1>;
  }
}

export default RoleDashboard;