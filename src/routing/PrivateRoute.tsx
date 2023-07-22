import { Navigate, Outlet, MakeLinkOptions } from "@tanstack/router";
import { useState } from "react";
import { router } from "./router";

interface PrivateRouteProps {
  to: MakeLinkOptions["to"];
  redirectTo?: MakeLinkOptions["to"];
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { to = "/", redirectTo = "/" } = props;
  const [isAuthToken, setIsAuthToken] = useState(false);

  const handlePageAuth = () => {
    setIsAuthToken(!isAuthToken);

    router.navigate({
      to,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          handlePageAuth();
        }}
      >
        toggle auth
      </button>
      <p>Hello World 2 {isAuthToken ? "token found" : "auth not found"}</p>
      {isAuthToken ? <Outlet /> : <Navigate to={redirectTo} />}
    </div>
  );
};
