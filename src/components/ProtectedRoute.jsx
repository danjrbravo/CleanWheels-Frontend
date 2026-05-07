import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  const payload = JSON.parse(atob(token.split(".")[1]));

  if (!allowedRoles.includes(payload.rol)) {
    return <Navigate to="/login" />;
  }

  return children;
}