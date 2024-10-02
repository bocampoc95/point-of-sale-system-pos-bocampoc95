


const Sale =`<div class="w-full overflow-x-auto shadow-md sm:rounded-lg">
  <div class="Topo w-full justify-between items-center inline-flex p-4">
    <div
      class="Productos text-[#464646] text-[32px] font-bold font-['Raleway']"
    >
      Ventas
    </div>
    <div class="Botao justify-start items-center gap-2 flex">
      <div class="VerTodo text-[#2a7ae4] text-base font-bold font-['Raleway']">
        Ver todo
      </div>
      <div class="ArrowBackBlack24dp1 w-6 h-6">logo</div>
    </div>
  </div>
  <table
    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  >
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="px-6 py-3">Invoice</th>
        <th scope="col" class="px-6 py-3">Producto</th>
        <th scope="col" class="px-6 py-3">Cantidad</th>
        <th scope="col" class="px-6 py-3">Date</th>
        <th scope="col" class="px-6 py-3">Ventas</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          INV-001
        </th>
        <td class="px-6 py-4">
          <div class="flex items-center flex-auto space-x-2">
            <div
              alt="Avatar"
              class="DAvatars1 w-[40px] h-[40px] top-[5px] flex-col justify-center items-center inline-flex"
            >
              <img
                class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full"
                src="https://via.placeholder.com/40x40"
              />
            </div>
            <p>Pizza, gaseosa</p>
          </div>
        </td>
        <td class="px-6 py-4">2</td>
        <td class="px-6 py-4">18/09/2024</td>
        <td class="px-6 py-4">1221</td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          INV-002
        </th>
        <td class="px-6 py-4">
          <div class="flex items-center flex-auto space-x-2">
            <div
              alt="Avatar"
              class="DAvatars1 w-[40px] h-[40px] top-[5px] flex-col justify-center items-center inline-flex"
            >
              <img
                class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full"
                src="https://via.placeholder.com/40x40"
              />
            </div>
            <p>Agua</p>
          </div>
        </td>
        <td class="px-6 py-4">1</td>
        <td class="px-6 py-4">17/09/2024</td>
        <td class="px-6 py-4">900</td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          INV-003
        </th>
        <td class="px-6 py-4">
          <div class="flex items-center flex-auto space-x-2">
            <div
              alt="Avatar"
              class="DAvatars1 w-[40px] h-[40px] top-[5px] flex-col justify-center items-center inline-flex"
            >
              <img
                class="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full"
                src="https://via.placeholder.com/40x40"
              />
            </div>
            <p>Carne</p>
          </div>
        </td>
        <td class="px-6 py-4">5 kg</td>
        <td class="px-6 py-4">16/09/2024</td>
        <td class="px-6 py-4">1500</td>
      </tr>
      <!-- Fila para el total de ventas -->
      <tr class="bg-gray-200 dark:bg-gray-700">
        <td
          colspan="4"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right"
        >
          Total Ventas
        </td>
        <td
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          3621
        </td>
      </tr>
    </tbody>
  </table>
</div>
`




let sale = document.getElementById("content_sale_cp");
sale.innerHTML = Sale



  export default Sale