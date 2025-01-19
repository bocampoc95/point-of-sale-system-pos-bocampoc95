import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { getCustomer } from '../services/customerService';


function Clients() {
    const { data: clients, error, loading, request: fetchUsers } = useApi(getCustomer);

    // Llama a la API cuando el componente se monte
    useEffect(() => {
      fetchUsers();
    }, []); // Solo se ejecuta una vez al montar
  
    if (loading) return <p>Cargando clientes...</p>;
    if (error) return <p>Error al cargar clientes: {error}</p>;
  return (
    <div className="align-top w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div className="Topo w-full justify-between items-center inline-flex">
        <div className="Productos text-[#464646] text-[32px] font-bold font-['Raleway']">Clientes</div>
        <div className="Botao justify-start items-center gap-2 flex">
          <div className="VerTodo text-[#2a7ae4] text-base font-bold font-['Raleway']">Ver todo</div>
          <div className="ArrowBackBlack24dp1 w-6 h-6">logo</div>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Invoice</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Total amount</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {clients && clients.length > 0 ? (
            clients.map((client, index) => (
              <tr
                key={client.id || index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {client.order_id || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div
                      alt="Avatar"
                      className="DAvatars1 w-[40px] h-[40px] flex-col justify-center items-center inline-flex"
                    >
                      <img
                        className="Avatars3dAvatar1 w-[40px] h-[40px] rounded-full"
                        src={client.avatar || 'https://via.placeholder.com/40x40'}
                        alt="Avatar"
                      />
                    </div>
                    <p>{client.name}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{client.date}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {client.total_amount || '0'}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                      client.status === 'Paid'
                        ? 'text-green-700 bg-green-100'
                        : 'text-red-700 bg-red-100'
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                No hay usuarios disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};


export default Clients