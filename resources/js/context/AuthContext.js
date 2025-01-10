// import React, { createContext, useState, useEffect } from 'react';
// import { loginUser, getUserProfile } from '../api/services/authService';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   useEffect(() => {
//     if (token) {
//       getUserProfile()
//         .then((response) => setUser(response.data))
//         .catch(() => logout());
//     }
//   }, [token]);

//   const login = async (credentials) => {
//     const { data } = await loginUser(credentials);
//     setToken(data.token);
//     localStorage.setItem('token', data.token);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
