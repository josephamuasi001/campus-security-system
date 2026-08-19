import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { profile, logout } = useAuth();

  return (
    <div>
      <h1>Campus Security Dashboard</h1>

      <h2>Welcome, {profile?.full_name}</h2>

      <p>Email: {profile?.email}</p>

      <p>Role: {profile?.role}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;