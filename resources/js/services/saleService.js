import api from "../bootstrap";

// CRUD operations for product

// export const createProduct = (data) => api.post('/product', data);

export const getSale = async () => api.get('/sale');

export const getLastOrder = async () => api.get('/lastorder');
export const createOrder = async (data) => api.post('/order', data);
export const createOrderItem = async (data) => api.post('/orderitem', data);
export const createPayment = async (data) => api.post('/sale', data);

// export const getProductById = (id) => api.get(`/order/${id}`);
export const updateOrder = (id, data) => api.put(`/order/${id}`, data);
// export const deleteProduct = (id) => api.delete(`/product/${id}`);