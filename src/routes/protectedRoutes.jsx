import { Outlet, Navigate } from "react-router-dom";
import { getLocalAdmin } from "~/utils/common";

function ProtectedRoutes() {
  const localAdmin = getLocalAdmin();

  return localAdmin ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedRoutes;
