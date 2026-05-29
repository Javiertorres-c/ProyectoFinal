
import { useEffect, useState } from "react";
import client from "../api/client";

export const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {

    try {

      const response = await client.get("/productos");

      setProducts(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  const getProductById = async (id) => {

    const response = await client.get(`/productos/${id}`);

    return response.data;
  };

  const createProduct = async (data) => {

    const response = await client.post("/productos", data);

    return response.data;
  };

  const updateProduct = async (id, data) => {

    const response = await client.put(`/productos/${id}`, data);

    return response.data;
  };

  const deleteProduct = async (id) => {

    await client.delete(`/productos/${id}`);

    setProducts(prev =>
      prev.filter(product => product.id !== id)
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    loading,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
