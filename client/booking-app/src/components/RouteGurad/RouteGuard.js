import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};
