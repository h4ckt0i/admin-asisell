import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";
import { publicRoutes, protectedRoutes } from "./routes/routes";
import Loading from "./components/loading/loading";
import NotFound from "./pages/notFound/notFound";

import styles from "./App.module.scss";

function App() {
  return (
    <React.StrictMode>
      <div className={styles.container}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<PublicRoutes />}>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route>
            <Route element={<ProtectedRoutes />}>
              {protectedRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </React.StrictMode>
  );
}

export default App;
