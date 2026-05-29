
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  onDelete
}) => {

  return (

    <table>

      <thead>

        <tr>
          <th>Acciones</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Estado</th>
        </tr>

      </thead>

      <tbody>

        {products.map(product => (

          <ProductRow
            key={product.id}
            product={product}
            onDelete={onDelete}
          />

        ))}

      </tbody>

    </table>
  );
};

export default ProductTable;
