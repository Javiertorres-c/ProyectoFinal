
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../hooks/useProducts";

const ProductCreatePage = () => {

  const navigate = useNavigate();

  const { createProduct } = useProducts();

  const handleCreate = async (data) => {

    await createProduct(data);

    navigate("/");
  };

  return (
    <div className="container">

      <h1>Nuevo Producto</h1>

      <ProductForm
       onSubmit={handleCreate}
        onCancel={() => navigate("/")}
/>

    </div>
  );
};

export default ProductCreatePage;
