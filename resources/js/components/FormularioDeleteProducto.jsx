import React, { useState } from "react";
import {  deleteProduct } from "../services/productService";

const FormularioDeleteProducto = ({ isOpen, onClose, categorias }) => {
    const [formData, setFormData] = useState({
      
        categories_id: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        // if (!formData.name) newErrors.name = "El nombre es obligatorio";
        // if (!formData.description)
        //     newErrors.description = "La descripción es obligatoria";
        // if (!formData.stock) newErrors.stock = "El stock es obligatorio";
        // if (!formData.price) newErrors.price = "El precio es obligatorio";
        if (!formData.categories_id)
            newErrors.categories_id = "Seleccione una categoría";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "url_image") {
            // setFormData({ ...formData, [name]: files[0] });
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors({ ...errors, [name]: "" }); // Limpiar errores al cambiar
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            // const response = await createProduct(formData);
            const response = await deleteProduct(formData.categories_id);
            console.log(response.data); // Maneja la respuesta del servidor
            console.log(response); // Maneja la respuesta del servidor
        } catch (error) {
            console.error(error);
            alert(error);
        }
        console.log("Formulario enviado:", formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Delete Producto</h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
            
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Eliminar:
                        </label>
                        <select
                            className="w-full p-2 border rounded"
                            name="categories_id"
                            value={formData.categories_id}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un Producto</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}  onChange={handleChange}>
                                    {categoria.name}
                                </option>
                            ))}
                        </select>
                        {errors.categories_id && (
                            <p className="text-red-600 text-sm">
                                {errors.categories_id}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioDeleteProducto;
