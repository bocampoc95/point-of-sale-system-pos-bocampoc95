import React, { createContext, useEffect, useReducer, useMemo } from "react";
import { loginUser, getUserProfile } from "../services/authService";
import { authReducer, initialAuthState, AUTH_ACTIONS } from "../reducer/AuthReducer";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile()
        .then((response) => {
          dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: { user: response.data, token } });
        })
        .catch(() => logout());
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response  = await loginUser(credentials);
      console.log(response.data);

      console.log(response);
      
      // Eliminar la palabra "login" para obtener solo el JSON
      const jsonString = response.data.replace('login', '');

// Convertir la cadena JSON a un objeto
    let datjson = JSON.parse(jsonString);
    console.log(datjson)
     const data = datjson['user'];
     console.log(data)
     console.log(data.name)
     console.log(data.email)

      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: { user: data.name, token: data.id } });
      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    localStorage.removeItem("token");
    // const nav = useNavigate();
    console.log("SALIO");
    window.location.href = "/";
    
  
  };

  const authContextValue = useMemo(() => ({
    user: state.user,
    token: state.token,
    login,
    logout
  }), [state.user, state.token]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
