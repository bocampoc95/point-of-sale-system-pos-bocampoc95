


const Clientes = `<div class="w-full overflow-x-auto shadow-md sm:rounded-lg">

<div class="Topo w-full justify-between items-center inline-flex p-4">
<div class="Productos text-[#464646] text-[32px] font-bold font-['Raleway']">Clientes</div>
<div class="Botao justify-start items-center gap-2 flex">
  <div class="VerTodo text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver todo</div>
  <div class="ArrowBackBlack24dp1 w-6 h-6 "> logo</div>
</div>
</div>
    <table class="sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
                  factura
              </th>
              <th scope="col" class="px-6 py-3">
                  Nombre
              </th>
              <th scope="col" class="px-6 py-3">
                  Correo
              </th>
              <th scope="col" class="px-6 py-3">
                  Fecha
              </th>
              <th scope="col" class="px-6 py-3">
                  Estado
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  INV-001
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center flex-auto space-x-2">
                  <div  alt="Avatar" class="DAvatars1 w-[40px] h-[40px]  top-[5px]  flex-col justify-center items-center inline-flex">
                    <img class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full" src="https://via.placeholder.com/40x40" />
                  </div>
                  <p>
                    John Doe
                  </p>
                </div>
            
              </td>
              <td class="px-6 py-4">
                  john.doe@example.com
              </td>
              <td class="px-6 py-4">
                  18/09/2024
              </td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                  Failed
                </span>
              </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  INV-002
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center flex-auto space-x-2">
                  <div  alt="Avatar" class="DAvatars1 w-[40px] h-[40px]  top-[5px]  flex-col justify-center items-center inline-flex">
                    <img class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full" src="https://via.placeholder.com/40x40" />
                  </div>
                  <p>
                    Rambo 
                  </p>
                </div>
              </td>
              <td class="px-6 py-4">
                  jane.smith@example.com
              </td>
              <td class="px-6 py-4">
                  17/09/2024
              </td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                  sending
                </span>
              </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  INV-003
              </th>
        
              <td class="px-6 py-4">
                
                <div class="flex items-center flex-auto space-x-2">
  
              
                  <div  alt="Avatar" class="DAvatars1 w-[40px] h-[40px]  top-[5px]  flex-col justify-center items-center inline-flex">
                    <img class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full" src="https://via.placeholder.com/40x40" />
                  </div>
                  <p>
                    Carlo
                  </p>
                </div>
  
            </td>
              <td class="px-6 py-4">
                  carlos.lopez@example.com
              </td>
              <td class="px-6 py-4">
                  16/09/2024
              </td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                  Confirmed
                </span>
              </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  INV-004
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center flex-auto space-x-2">
                  <div  alt="Avatar" class="DAvatars1 w-[40px] h-[40px]  top-[5px]  flex-col justify-center items-center inline-flex">
                    <img class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full" src="https://via.placeholder.com/40x40" />
                  </div>
                  <p>
                    Ana G
                  </p>
                </div>
              </td>
              <td class="px-6 py-4">
                  ana.garcia@example.com
              </td>
              <td class="px-6 py-4">
                  15/09/2024
              </td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                  Confirmed
                </span>
              </td>
          </tr>
      </tbody>
  </table>
  
  </div>
`


let client = document.getElementById("content_client_cp");
client.innerHTML = Clientes
export default Clientes;