import React, { useEffect } from 'react'
import useApi from '../hooks/useApi';
import { getProduct } from '../services/productService';
function Products() {
    const { data: products, error, loading, request: fetchUsers } = useApi(getProduct);

    // // Llama a la API cuando el componente se monte
    useEffect(() => {
      fetchUsers();
    }, []); // Solo se ejecuta una vez al montar
  
    if (loading) return <p>Cargando  products...</p>;
    if (error) return <p>Error al cargar products: {error}</p>;
  console.log(products)
  return (
    <div>
          <div className="Productos w-full   flex-col justify-center items-start gap-[106px] ">

    
<div className="LineaProduto  flex-col justify-start items-start gap-4 inline">

  <div className="Topo w-full justify-between items-center inline-flex p-4">
    <div className="Productos text-[#464646] text-[32px] font-bold font-['Raleway']">Productos</div>
    <div className="Botao justify-start items-center gap-2 flex">
      <div className="VerTodo text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver todo</div>
      <div className="ArrowBackBlack24dp1 w-6 h-6 "> logo</div>
    </div>
  </div>
  <div className="Produtos justify-between items-start gap-4  p-4">
  {products && products.length > 0 ? (
    
        <ul>
          {products.map((product) => (
            <div className="Produto flex-col justify-start items-start gap-2 inline-flex p-2" key={product.id}>

            <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
              <img className="img self-stretch grow shrink basis-0" src={ "https://via.placeholder.com/176x174"||product.url_image}  alt="Product"/>
            </div>
            <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">{product.name}</div>
            <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ {product.price}</div>
            <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']"> {product.stock} und</div>
            <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway'] w-48 ">{product.description}</div>
            
        <div class="flex items-center bg-[#2a7ae4]">
          <button class="Less w-5 h-4  justify-center items-center inline-flex  bg-red-300  rounded-full "><span
              class="font-semibold">-</span>
          </button>
          <div class=" w-5 h-4   text-black text-sm font-semibold font-['Inter']  text-center">2</div>
  
          <button class="Add  w-5 h-4  justify-center items-center inline-flex  bg-green-300    rounded-full"><span>+</span>
          </button>
        </div>
            
            </div>

          ))}
        </ul>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    
    {/* <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
      <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
        <img className="UnsplashEprfeHbnjo self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
      </div>
      <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
      <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
      <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
    </div>
    <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
      <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
        <img className="UnsplashKegtodvn0l4 self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
      </div>
      <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
      <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
      <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
    </div>
    <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
      <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
        <img className="Unsplash4ohkk555s1a self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
      </div>
      <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
      <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
      <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
    </div>
    <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
      <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
        <img className="UnsplashR8l1l9rn198 self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
      </div>
      <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
      <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
      <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
    </div>
    <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
      <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
        <img className="Unsplash1vv1mrafd7a self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
      </div>
      <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
      <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
      <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
    </div> */}
  </div>
</div>
{/* <div className="Produtos self-stretch justify-start items-start gap-4  p-4 ">
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashFmpOcze3ay self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="CamisaAtari self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Camisa Atari</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashBugaiazysh0 self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="CamisaSnes self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Camisa SNES</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashSyvyZkwaxu self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="ControlYConsolaXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Control y consola XYZ</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashJmt6brgbuxu self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="ControlYConsolaXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Control y consola XYZ</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashMxvkwpijals self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="ControlYConsolaXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Control y consola XYZ</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
  <div className="Produto flex-col justify-start items-start gap-2 inline-flex">
    <div className="Skill w-44 h-[174px] bg-white flex-col justify-end items-start gap-2 flex">
      <img className="UnsplashR27umxaeldc self-stretch grow shrink basis-0" src="https://via.placeholder.com/176x174" />
    </div>
    <div className="ProductoXyz self-stretch text-[#464646] text-sm font-medium font-['Raleway']">Producto XYZ</div>
    <div className="6000 self-stretch text-[#464646] text-base font-bold font-['Raleway']">$ 60,00</div>
    <div className="VerProducto text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver producto</div>
  </div>
</div> */}
</div>
    </div>
  )
}

export default Products