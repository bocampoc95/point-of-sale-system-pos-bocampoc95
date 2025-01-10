import React from 'react'

function AsideSale() {
  return (
    <div>

<div className="">

<div className="ASIDE space-y-3  p-1 gap-1  justify-between">
  {/* <!-- Componente config --> */}
  <div className="Config max-w-[282px] h-24  bg-[#eaf2fd] flex flex-auto justify-between  p-1 gap-1">
    <div className="flex flex-col justify-center ">
      <div className="Buttonbase px-3 py-2 bg-[#002583] rounded-md justify items-center gap-2 flex">
        <div className="Content justify-start items-center gap-2 flex">
          <div className="Bookmark w-4 h-4 rounded-full justify-center items-center flex bg-white"> 
        
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          
          </div>
          <div className="Label text-white text-sm font-semibold font-['Inter'] leading-[14px]"><span className="">FAQ</span></div>
        </div>
      </div>
    </div>
    <div className="PrimaryButton flex flex-col justify-center ">
      <div className="Buttonbase px-3 py-2 bg-[#002583] rounded-md justify-start items-center gap-2 flex">
        <div className="Content justify-start items-center gap-2 flex">
          <div className="Bookmark w-4 h-4 rounded-full justify-center items-center flex bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <div className="Label text-white text-sm font-semibold font-['Inter'] leading-[14px]">Configuración</div>
        </div>
      </div>
    </div>
  {/* <!-- Componente config --> */}
  
  </div>
  {/* <!-- Componente config --> */}
  <div className="Sales  h-full flex flex-col   justify-between  rounded-md bg-[#96bcf1] ">
    <div className="SideSales max-w-[282px] max-h-[564px]   ">
      <span className="p-1 font-bold">Ventas</span>
      <div className="Itemsale    ">
    <div className="flex  justify-between p-7">
      <div className="Produto w-28   flex-col justify-between items-center gap-2  p-1">
        <div className="Img   bg-white flex-col items-center  gap-2 flex">
          <img className=" rounded-full   " src="https://via.placeholder.com/71x71" />
        </div>
        <div className="Producto self-stretch text-[#464646]  text-center text-sm font-medium font-['Raleway']">Producto XYZ
        </div>
        <div className="Price self-stretch text-[#464646] text-center text-base font-bold font-['Raleway']">$ 60,00</div>
      </div>
  
      <div className="flex  ">
  
        <div className="flex items-center bg-fuchsia-500">
          <button className="Less w-5 h-4  justify-center items-center inline-flex  bg-red-300  rounded-full "><span
              className="font-semibold">-</span>
          </button>
          <div className=" w-5 h-4   text-black text-sm font-semibold font-['Inter']  text-center">2</div>
  
          <button className="Add  w-5 h-4  justify-center items-center inline-flex  bg-green-300    rounded-full"><span>+</span>
          </button>
        </div>
  
      </div>
    </div>
  
      </div>
    
    </div>
    
    
    
    
    {/* <!-- PAYMENT --> */}
    <div className="Payment  flex flex-col p-2  items-center ">
      <div className="Pay w-[243px]    bg-[#002583] rounded-[20px] p-4">
        <div className="flex flex-auto justify-between p-3">
          <div className="Total    text-white text-sm font-semibold font-['Inter'] leading-[14px]">Total</div>
          <div className="Precio  text-white text-sm font-semibold font-['Inter'] leading-[14px]">120</div>
        </div>
        <div className="flex flex-auto flex-col justify-between items-center">
          <div className="Pagos   text-white text-sm font-semibold font-['Inter'] ">Pagos</div>
    
        </div>
        <div className="Line    border border-white"></div>
    
        <div className="flex  justify-between p-1">
          <div className="CashButton left-[23px] top-[120px]  justify-start items-start inline-flex">
            <div className="Buttonbase px-3 py-2 bg-[#eaf2fd] rounded-md justify-start items-center gap-2 flex">
              <div className="Content justify-start items-center gap-2 flex">
                <div className="Bookmark w-4 h-4 px-[3.33px] py-0.5 justify-center items-center flex">icon</div>
                <div className="Label text-black text-sm font-semibold font-['Inter'] leading-[14px]">Cash</div>
    
              </div>
            </div>
          </div>
          <div className="CardButton left-[135px] top-[120px]  justify-start items-start inline-flex">
            <div className="Buttonbase px-3 py-2 bg-[#eaf2fd] rounded-md justify-start items-center gap-2 flex">
              <div className="Content justify-start items-center gap-2 flex">
                <div className="Bookmark w-4 h-4 px-[3.33px] py-0.5 justify-center items-center flex">Icon</div>
                <div className="Label text-black text-sm font-semibold font-['Inter'] leading-[14px]">Card</div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
      {/* <!-- PAYMENT --> */}
  </div>
    
  
  
  </div>
</div>

    </div>
  )
}

export default AsideSale