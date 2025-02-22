import React, { useId, useEffect,useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useAdd } from '../hooks/useAdd';
import FormAddCustomer from './FormAddCustomer';
import useApi from '../hooks/useApi';
import { getLastCustomer } from '../services/customerService';
import FormPayOrder from './FormPayOrder';
import { getLastOrder } from '../services/saleService';
import { useAuth } from '../hooks/useAuth';

function AsideSale() {
  const data =useAuth();
  const { cart, clearCart, addToCart, removeFromCart } = useCart();
  const [quantities, handleAddQty, handleRemoveQty, resetQuantities] = useAdd();
  const totalTicket = [];
  const cartId = useId();
  const fecha = new Date();
  const _fecha = fecha.getDate()+'/'+fecha.getMonth()+1+'/'+fecha.getFullYear()
  useEffect(() => {
    resetQuantities();
  }, [cart]);
const [isOpenC, setIsOpenC] = useState(false);

const toggleCustomer = () => {
  setIsOpenC(!isOpenC);
};
const [isOpenCash, setIsOpenCash] = useState(false);
const toggleCash = () => {
  setIsOpenCash(!isOpenCash);
};
const { data: customer, error, loading, request: fetchCustomer } = useApi(getLastCustomer);
  useEffect(() => {
    fetchCustomer();
  }, []);
  const info = customer || '';

  const { data: order, request: fetchOrder } = useApi(getLastOrder);
  useEffect(() => {
    fetchOrder();
  }, []);
  console.log(data)
  console.log("ORDEE")

  console.log(order)
  return (
    <div className="bg-slate-500 align-top space-y-3 p-1 gap-1 justify-between">
      {/* Contenedor Sticky */}
      <div className="align-top top-0 bg-white z-10">
        <div className="ASIDE space-y-3 p-1 gap-1">
          {/* Configuración */}
          <div className="Config bg-[#eaf2fd] flex justify-between p-3 gap-2 rounded-md">
            <button className="Buttonbase flex items-center gap-2 px-3 py-2 bg-[#002583] rounded-md">
              <div className="Bookmark w-4 h-4 flex items-center justify-center bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <span className="text-white text-sm font-semibold">FAQ</span>
            </button>

            <button className="Buttonbase flex items-center gap-2 px-3 py-2 bg-[#002583] rounded-md">
              <div className="Bookmark w-4 h-4 flex items-center justify-center bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <span className="text-white text-sm font-semibold">Configuración</span>
            </button>
          </div>

          {/* Ventas */}
          <div className="Sales flex flex-col bg-[#96bcf1] rounded-md p-3">
            <div  className='flex flex-row justify-between'>

            <span className="font-bold mb-2">Ventas</span>
            <span className="font-bold mb-2">Fecha: {_fecha}</span>
            </div>
            <span className="font-bold mb-2">Orden: {_fecha}</span>
            <span className="font-bold mb-2">Cliente: {info.name}</span>

            <div className="ItemSale flex justify-between items-center gap-4 flex-col">
              {/* Producto */}
              {cart && cart.length > 0 ? (
                cart.map((product) => {
                  const qty = quantities[product.id] || product.quantity;
                  let valueP = qty * product.price;
                  totalTicket.push(valueP);
                  return (
    
                    <div key={product.id} className="flex justify-between items-center w-full mb-2">
  <div className="Produto flex flex-col items-center my-4">
    <img
      className="imagen w-16 h-16 rounded-full bg-white"
      src={product.url_image}
      alt={product.name}
    />
    <span className="name text-[#464646] text-sm font-medium">{product.name}</span>
    
    {/* Precio unitario */}
    <span className="price text-[#464646] text-base font-bold">${product.price}</span>
    
    {/* Línea divisoria */}
    <div className="w-full border-t border-black my-2"></div>
    
    {/* Precio total por cantidad */}
    <span className="price text-[#464646] text-base font-bold">${valueP}</span>
  </div>
  
  {/* Contador */}
  <div className="flex items-center gap-2">
    <button
      className="Less w-6 h-6 bg-red-300 rounded-full flex items-center justify-center hover:bg-red-400 hover:shadow-lg"
      onClick={() => handleRemoveQty(product.id, qty)}
    >
      <span>-</span>
    </button>
    <span className="text-black text-sm font-semibold">{qty}</span>
    <button
      className="Add w-6 h-6 bg-green-300 rounded-full flex items-center justify-center hover:bg-green-400 hover:shadow-lg"
      onClick={() => handleAddQty(product.id, product.stock, qty)}
    >
      <span>+</span>
    </button>
  </div>
</div>

                  );
                })
              ) : (
                <p className="text-gray-500 col-span-full">No hay productos en el carrito.</p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4 ">
              <button className="bg-red-600 text-black px-3 py-2 rounded-md" onClick={clearCart}>Trash</button>
              {/* <button className="bg-[#eaf2fd] text-black px-3 py-2 rounded-md">Pago</button> */}
            </div>
          {/* Pago */}
          <div className="Payment bg-[#002583] rounded-md p-3 text-white flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span>${totalTicket.reduce((a, b) => a + b, 0)}</span>
            </div>
       

            <div className="flex justify-between gap-4 ">
              <button className="bg-[#eaf2fd] text-black px-3 py-2 rounded-md" onClick={toggleCash}>Cash</button>
              <button className="bg-[#eaf2fd] text-black px-3 py-2 rounded-md">Card</button>
            </div>
          </div>

          {/* Botón de Nueva venta */}
          <div className="Config bg-[#eaf2fd] flex justify-center p-3 gap-2 rounded-md">
            <button className="Buttonbase flex items-center gap-2 px-3 py-2 bg-[#002583] rounded-md" >
              <div className="Bookmark w-5 h-6 flex items-center justify-center bg-white rounded-full">
                <i>🧾</i>
              </div>
              <span className="text-white text-sm font-semibold">Nueva venta</span>
            </button>
            <button className="Buttonbase flex items-center gap-2 px-3 py-2 bg-[#002583] rounded-md" onClick={toggleCustomer}>
              <div className="Bookmark w-5 h-6 flex items-center justify-center bg-white rounded-full">
                <i>🙋🏻‍♂️</i>
              </div>
              <span className="text-white text-sm font-semibold">Nuevo Cliente</span>
            </button>
            
            <FormAddCustomer isOpen={isOpenC} 
            order={{"user_id": data.token,
    "total_amount": totalTicket.reduce((a, b) => a + b, 0),
    "status": "Pending"}}
        onClose={() => setIsOpenC(false)}/>

        <FormPayOrder isOpen={isOpenCash} 
        data={totalTicket.reduce((a, b) => a + b, 0)}
        order={order}
        onClose={() => setIsOpenCash(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideSale;
