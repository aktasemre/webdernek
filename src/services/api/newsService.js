import axiosInstance from './axiosInstance.js';

export const getNews = async () => {
  try {
    const response = await axiosInstance.get('/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news by id:', error);
    throw error;
  }
};

export const createNews = async (newsData) => {
  try {
    const response = await axiosInstance.post('/news', newsData);
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const updateNews = async (id, newsData) => {
  try {
    const response = await axiosInstance.put(`/news/${id}`, newsData);
    return response.data;
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axiosInstance.delete(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};

const newsService = {
  getAllNews: getNews,
  getNewsById: getNewsById,
  createNews: createNews,
  updateNews: updateNews,
  deleteNews: deleteNews,
  publish: async (id) => {
    const response = await axiosInstance.put(`/news/${id}/publish`);
    return response.data;
  }
};

export default newsService; 