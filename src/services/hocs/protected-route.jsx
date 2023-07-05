import constants from "../../utils-for-application/constants";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ unauthorized, element }) => {
  const success = useSelector((s) => s.user.response?.success ?? false);
  const check = useSelector((s) => s.user.check);
  const location = useLocation();

  const endpoint = ({ to, state }) => {
    return <Navigate to={to} state={state} />;
  };

  const toBack = {
    to: (location.state && location.state.from) || { pathname: "/" },
  };

  const toLogin = { to: "/login", state: { from: location } };

  return !check
    ? null
    : unauthorized && success
    ? endpoint(toBack)
    : !unauthorized && !success
    ? endpoint(toLogin)
    : element;
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
