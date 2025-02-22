import React, { useState } from "react";
import { createProduct } from "../services/productService";
import { useCart } from "../hooks/useCart";
import { createOrderItem, createPayment, updateOrder } from "../services/saleService";
import { info } from "autoprefixer";

const FormPayOrder = ({ isOpen, onClose, data, order }) => {
    const { cart, clearCart, addToCart, removeFromCart } = useCart();
    
    const [formData, setFormData] = useState({
        compra:0,
        pago: 0,
        devuelta:0
    });

    const [errors, setErrors] = useState({});
console.log(typeof(formData.pago));
console.log(typeof(data));
    const validate = () => {
        const newErrors = {};
        if (!formData.pago) newErrors.pago = "Pago es obligatorio";
        if (parseFloat(formData.pago)<0) newErrors.pago = "Pago debe ser positivo";
        if (parseFloat(formData.pago)<parseFloat(data)) newErrors.pago = "Pago debe ser mayor al saldo";
     
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "url_image") {
            // setFormData({ ...formData, [name]: files[0] });
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: parseFloat(value) });
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
            const cambio = formData.pago-data;
            console.log("envio IN"); // Maneja la respuesta del servidor
            // console.log("Cambio:",devuelta); // Maneja la respuesta del servidor
            setFormData({devuelta:cambio})
            console.log(cart);
            console.log(order.id)
            let orderItems = []
            const infox = cart.map((prod)=>{
                console.log(prod)
                
            const newSale = {
                "order_id": order.id,
                "product_id": prod.id,
                "quantity": prod.quantity,
                "unit_price": prod.price,
                "subtotal": prod.quantity*prod.price,
            }
            
            orderItems.push(newSale);
            
            })

            console.log("DATA")
            console.log(orderItems);
            const response = await createOrderItem(orderItems);
            console.log(response.data)
            console.log(response)
            console.log("DATA")
            const newPayment = {
                "order_id": order.id,
                "amount": data,
                "method": 'Cash',
                "status": 'Paid',
            }
            const responseP = await createPayment(newPayment);
            console.log(responseP)
            console.log(responseP.data)
            const updateOrderDat = {
                "order_id": order.id,
                "status": 'Paid',
            }
            const responseUO = await updateOrder(order.id,updateOrderDat)
            
            console.log("UPDA")
            console.log(responseUO)
            console.log(responseUO.data)
            alert("Cambio "+cambio)

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
                <h2 className="text-2xl font-bold mb-4">Orden a Pagar: </h2>
                <h2 className="text-2xl font-bold mb-4">Estado: </h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Total a pagar: {data}</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded"
                            name="pago"
                            value={formData.pago}
                            onChange={handleChange}
                        />
                        {errors.pago && (
                            <p className="text-red-600 text-sm">
                                {errors.pago}
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
                            Pagar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPayOrder;
