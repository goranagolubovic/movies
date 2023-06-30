import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const PrivateRoute = (props: any) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? props.children : <Navigate to="/login" />;
};

export default PrivateRoute;
