import { useState } from 'react';

const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunction(...args);
      setData(result.data);
    } catch (err) {
      setError(err.response?.data || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

export default useApi;
