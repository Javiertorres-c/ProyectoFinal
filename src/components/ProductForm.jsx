
import { useState } from "react";

const ProductForm = ({
  initialData,
  onSubmit,
  onCancel
}) => {

  const [formData, setFormData] = useState({

    nombre: initialData?.nombre || "",
    descripcion: initialData?.descripcion || "",
    precio: initialData?.precio || "",
    stock: initialData?.stock || "",
    estado: initialData?.estado ?? true,
  });

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);
  };

  return (

    <form
      className="form"
      onSubmit={handleSubmit}
    >

      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />

      <textarea name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} />

      <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange}  />

      <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />

     <div className="form-actions">

    <button type="submit" className="btn"> Guardar </button>

    <button type="button" className="btn btn-ghost"  onClick={onCancel}> Cancelar </button>

  </div>

    </form>
  );
};

export default ProductForm;
