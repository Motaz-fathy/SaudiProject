import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../utilty/context/AuthContext";
import routes from "./index";


const AuthRouter = () => {
  const { token } = useAuth();

  return (
    <Routes>
      {routes.map(({ path, isPrivate, component: Component, exact }) => {


        return (
          <Route
            key={path}
            path={path}
            exact={exact}
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                {isPrivate ? (
                  <>
                    <Component />
                  </>
                ) : (
                  <>
                  <Component />
                  </>
                )}
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AuthRouter;
