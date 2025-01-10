import api from "../bootstrap";

// CRUD operations for product

// export const createProduct = (data) => api.post('/product', data);

export const getCustomer = () => api.get('/customer');
// export const getProductById = (id) => api.get(`/product/${id}`);
// export const updateProduct = (id, data) => api.put(`/product/${id}`, data);
// export const deleteProduct = (id) => api.delete(`/product/${id}`);