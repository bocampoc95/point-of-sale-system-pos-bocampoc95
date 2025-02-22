import api from "../bootstrap";

// CRUD operations for product

export const createCategory = async (data) => api.post('/category', data);

export const getCategory = async () => api.get('/category');
export const getCategoryById = (id) => api.get(`/category/${id}`);

export const updateCategory = (id, data) => api.put(`/category/${id}`, data);

export const deleteCategory = (id) => api.delete(`/category/${id}`);