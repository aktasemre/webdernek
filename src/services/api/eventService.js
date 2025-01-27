import axiosInstance from './axiosInstance';

export const eventService = {
  getAll: async () => {
    const response = await axiosInstance.get('/events');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/events/${id}`);
    return response.data;
  },

  create: async (eventData) => {
    const response = await axiosInstance.post('/events', eventData);
    return response.data;
  },

  update: async (id, eventData) => {
    const response = await axiosInstance.put(`/events/${id}`, eventData);
    return response.data;
  },

  delete: async (id) => {
    await axiosInstance.delete(`/events/${id}`);
  }
}; 