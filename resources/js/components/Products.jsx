import React, { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import { getProduct } from '../services/productService';
import { useCart } from '../hooks/useCart';
import { useAdd } from '../hooks/useAdd';

function Products() {
  const { data: products, error, loading, request: fetchProducts } = useApi(getProduct);
  const [quantities, handleAddQty, handleRemoveQty] = useAdd();

  // Llama a la API cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div className="align-top w-full flex flex-col items-start p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Productos</h1>
        <button className="text-blue-600 font-bold hover:underline">
          Ver todo
        </button>
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => {
            const isProductInCart = checkProductInCart(product);
            const qty = quantities[product.id] || 0;
            // console.log(quantities[product.id] )
            // console.log(qty)
            product.quantity = qty;
            return (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4"
              >
                {/* Imagen del producto */}
                <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.url_image || 'https://via.placeholder.com/176x174'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Información del producto */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium text-gray-900 truncate">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2 break-words">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-gray-800">${product.price}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.stock} und
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex items-center justify-center gap-10 mt-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-red-300 rounded-full font-bold hover:bg-red-400 hover:shadow-lg" onClick={() => handleRemoveQty(product.id)}>
                    -
                  </button>
                  <span className="text-sm font-semibold">{qty}</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-green-300 rounded-full font-bold hover:bg-green-400 hover:shadow-lg" onClick={() => handleAddQty(product.id, product.stock)}>
                    +
                  </button>
                </div>
                <div className='flex align-middle justify-center'>
              
                  <button
  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border  ${
    qty === 0 ? 'hidden' : ''
  }  ${
    isProductInCart ? ' bg-orange-500 text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-amber-400 hover:shadow-lg' : 'bg-emerald-500  text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:hover:bg-green-500 shadow-lg'} ` }
  onClick={() => {
    isProductInCart ? removeFromCart(product) : addToCart(product);
  }}
>
  {isProductInCart ? (
    < >
      <span className=''>Remove</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15"
        />
      </svg>
    </>
  ) : (
    <>
      <span>Add</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </>
  )}
</button>

                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 col-span-full">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
