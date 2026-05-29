
import {  useEffect, useState} from "react";
import {  useNavigate,  useParams} from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../hooks/useProducts";

const ProductEditPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getProductById,
    updateProduct
  } = useProducts();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const loadProduct = async () => {

      const data = await getProductById(id);

      setProduct(data);
    };

    loadProduct();

  }, [id]);

  const handleUpdate = async (data) => {

    await updateProduct(id, data);

    navigate("/");
  };

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">

      <h1>Editar Producto</h1>

     <ProductForm
       initialData={product}
       onSubmit={handleUpdate}
       onCancel={() => navigate("/")}
/>

    </div>
  );
};

export default ProductEditPage;
