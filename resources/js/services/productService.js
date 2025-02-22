import api from "../bootstrap";

// CRUD operations for product

export const createProduct = async (data) => api.post('/product', data);

export const getProduct = () => api.get('/product');
export const getProductById = (id) => api.get(`/product/${id}`);

export const updateProduct = (id, data) => api.put(`/product/${id}`, data);

export const deleteProduct = async (id) => api.delete(`/product/${id}`);