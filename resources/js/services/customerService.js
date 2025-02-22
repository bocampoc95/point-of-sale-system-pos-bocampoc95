import api from "../bootstrap";

// CRUD operations for product

export const createCustomer = async (data) => api.post('/customer', data);
export const getCustomer = () => api.get('/customer');
export const getLastCustomer = async () => api.get('/lastcustomer');
// export const getProductById = (id) => api.get(`/product/${id}`);
// export const updateProduct = (id, data) => api.put(`/product/${id}`, data);
// export const deleteProduct = (id) => api.delete(`/product/${id}`);