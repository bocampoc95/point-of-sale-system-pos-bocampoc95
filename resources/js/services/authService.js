import api from "../bootstrap";

// CRUD operations for user

// export const createProduct = (data) => api.post('/product', data);

export const getUserProfile =  (data) => api.get('/user',data);
// export const getLogin = await (data) => api.get('/login',data);
export const loginUser = async (data) => {
    return api.post('/login',  data );
  };  
export const postUser = (data) =>api.post('/register',data);