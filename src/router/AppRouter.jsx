
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/productos/nuevo"
          element={<ProductCreatePage />}
        />

        <Route
          path="/productos/editar/:id"
          element={<ProductEditPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
