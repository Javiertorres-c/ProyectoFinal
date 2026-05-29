
import { Link } from "react-router-dom";

const ProductRow = ({
  product,
  onDelete
}) => {

  const handleDelete = () => {

    const confirmDelete = window.confirm(
      "¿Eliminar producto?"
    );

    if (!confirmDelete) return;

    onDelete(product.id);
  };

  return (

    <tr>

      <td className="actions">

        <Link
          className="btn-edit"
          to={`/productos/editar/${product.id}`}
        >
          Editar
        </Link>

        <button
          className="btn-delete"
          onClick={handleDelete}
        >
          Eliminar
        </button>

      </td>

      <td>{product.nombre}</td>
      <td>{product.descripcion}</td>
      <td>S/ {product.precio}</td>
      <td>{product.stock}</td>

      <td>
        {product.estado
          ? "Activo"
          : "Inactivo"}
      </td>

    </tr>
  );
};

export default ProductRow;
