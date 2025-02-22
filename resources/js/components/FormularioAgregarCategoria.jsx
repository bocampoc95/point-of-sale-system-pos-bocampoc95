import React, { useState } from 'react';
import { createCategory } from '../services/categoryService';
import { useNavigate } from 'react-router-dom';

const FormularioAgregarCategoria = ({ isOpen, onClose }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
       try {
                    const response = await createCategory(formData);
                    console.log(response.data); // Maneja la respuesta del servidor
                    console.log(response); // Maneja la respuesta del servidor
              
    
    
                } catch (error) {
                    console.error(error)
                    alert(error)
                }
    console.log('Formulario enviado:', formData);
    onClose();
    navigate('/products');

    // window.location.reload()
    
  };

  if (!isOpen) return null; // No mostrar el formulario si no está abierto

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Agregar Categoría</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre:</label>
            <input type="text" className="w-full p-2 border rounded" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción:</label>
            <textarea className="w-full p-2 border rounded" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};


// export { FormularioAgregarCategoria, MenuListCategorias };
export default FormularioAgregarCategoria;
