
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductTable from "../components/ProductTable";

const DashboardPage = () => {

  const {
    products,
    loading,
    deleteProduct
  } = useProducts();

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="container">

      <div className="header">
        <h1>Lista de Productos</h1>

        <Link
          className="btn"
          to="/productos/nuevo"
        >
          Crear producto
        </Link>
      </div>

      <ProductTable
        products={products}
        onDelete={deleteProduct}
      />

    </div>
  );
};

export default DashboardPage;
