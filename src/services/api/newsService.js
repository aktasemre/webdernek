import axiosInstance from './axiosInstance';

export const newsService = {
  getAll: async () => {
    const response = await axiosInstance.get('/news');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/news/${id}`);
    return response.data;
  },

  create: async (newsData) => {
    const response = await axiosInstance.post('/news', newsData);
    return response.data;
  },

  update: async (id, newsData) => {
    const response = await axiosInstance.put(`/news/${id}`, newsData);
    return response.data;
  },

  delete: async (id) => {
    await axiosInstance.delete(`/news/${id}`);
  },

  publish: async (id) => {
    const response = await axiosInstance.put(`/news/${id}/publish`);
    return response.data;
  }
}; 