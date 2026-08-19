import { useAuth } from "./context/AuthContext";

function App() {
  const { user, profile, loading, logout } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <h1>No user logged in</h1>;
  }

  return (
    <div>
      <h1>Welcome, {profile?.full_name}</h1>

      <p>Email: {profile?.email}</p>

      <p>Role: {profile?.role}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default App;