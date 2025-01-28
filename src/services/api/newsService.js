import { axiosInstance } from './axiosInstance';

const newsService = {
  getAllNews: async () => {
    const response = await axiosInstance.get('/news');
    return response.data;
  },

  getNewsById: async (id) => {
    const response = await axiosInstance.get(`/news/${id}`);
    return response.data;
  },

  createNews: async (newsData) => {
    const response = await axiosInstance.post('/news', newsData);
    return response.data;
  },

  updateNews: async (id, newsData) => {
    const response = await axiosInstance.put(`/news/${id}`, newsData);
    return response.data;
  },

  deleteNews: async (id) => {
    const response = await axiosInstance.delete(`/news/${id}`);
    return response.data;
  },

  publish: async (id) => {
    const response = await axiosInstance.put(`/news/${id}/publish`);
    return response.data;
  }
};

export default newsService; 