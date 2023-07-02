import constants from "../../utils-for-application/constants";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ unauthorized, element }) => {
  const success = useSelector((s) => s.user.getUser.response?.success ?? false);
  const cheked = useSelector((s) => s.user.cheked);
  const location = useLocation();

  if (!cheked) {
    return null;
  }

  if (unauthorized && success) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!unauthorized && !success) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

const Authorized = ({ element }) => (
  <ProtectedRoute unauthorized={false} element={element} />
);

const Unauthorized = ({ element }) => (
  <ProtectedRoute unauthorized={true} element={element} />
);

ProtectedRoute.propTypes = constants.types.protectedRoute;
Authorized.propTypes = constants.types.authorized;
Unauthorized.propTypes = constants.types.unauthorized;

export { Authorized, Unauthorized };
