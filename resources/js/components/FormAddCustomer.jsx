import React, { useState } from "react";
import { createCustomer } from "../services/customerService";
import { createOrder } from "../services/saleService";
import { useCart } from "../hooks/useCart";

const FormAddCustomer = ({ isOpen, onClose ,order}) => {
    const { cart, clearCart, addToCart, removeFromCart } = useCart();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "El nombre es obligatorio";
        if (!formData.email)
            newErrors.email = "La email es obligatoria";
        if (!formData.phone) newErrors.phone = "El phone es obligatorio";
        if (!formData.address) newErrors.address = "El address es obligatorio";
     
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
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
            const response = await createCustomer(formData);
            const orderN = agregarCustomerId(order,response.data.id);
            console.log(response.data); // Maneja la respuesta del servidor
            console.log(orderN);
            
            const responseOrder = await createOrder(orderN);
            console.log(responseOrder);
           

        } catch (error) {
            console.error(error);
            alert(error);
        }
        console.log("Formulario enviado:", formData);
        onClose();
    };

    if (!isOpen) return null;
// console.log(order)
// console.log(order.user_id)
// console.log(order.customer_id)
function agregarCustomerId(datos, customerId) {
    return {
        ...datos,
        customer_id: customerId
    };
}
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Agregar Cliente</h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label className="block text-gray-700">order: </label>
                    
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </div>
             
                    <div className="mb-4">
                        <label className="block text-gray-700">Telefono:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">email:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Direccion:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">
                                {errors.address}
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
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormAddCustomer;
