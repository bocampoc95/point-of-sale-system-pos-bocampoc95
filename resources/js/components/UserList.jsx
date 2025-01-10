import React, { useEffect } from 'react';
// import { getUsers } from '../api/services/userService';
import useApi from '../hooks/useApi';
import { getProduct } from '../services/productService';

const UserList = () => {
  const { data: users, error, loading, request: fetchUsers } = useApi(getProduct);

  // Llama a la API cuando el componente se monte
  useEffect(() => {
    fetchUsers();
  }, []); // Solo se ejecuta una vez al montar

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error al cargar usuarios: {error}</p>;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default UserList;
