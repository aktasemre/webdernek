import axiosInstance from './axiosInstance';
import { handleApiError } from './utils';

/**
 * @typedef {Object} UserData
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} [password]
 * @property {string} phoneNumber
 * @property {string} address
 * @property {string} birthDate
 * @property {string} gender
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} role
 */

export const userService = {
  // Tüm kullanıcıları getir
  getAll: async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
  },

  /**
   * @returns {Promise<User|undefined>}
   */
  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('/users/me');
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise<User|undefined>}
   */
  getById: async (id) => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  },

  /**
   * @param {UserData} userData
   * @returns {Promise<User>}
   */
  create: async (userData) => {
    const response = await axiosInstance.post('/users', userData);
    return response.data;
  },

  /**
   * @param {string} id
   * @param {UserData} userData
   * @returns {Promise<User|undefined>}
   */
  update: async (id, userData) => {
    try {
      const response = await axiosInstance.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise<boolean|undefined>}
   */
  delete: async (id) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      return true;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * @param {string} id
   * @param {string} status
   * @returns {Promise<User|undefined>}
   */
  changeStatus: async (id, status) => {
    try {
      const response = await axiosInstance.put(`/users/${id}/status`, { status });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * @param {string} id
   * @param {string} role
   * @returns {Promise<User|undefined>}
   */
  changeRole: async (id, role) => {
    try {
      const response = await axiosInstance.put(`/users/${id}/role`, { role });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * @param {string} query
   * @returns {Promise<User[]|undefined>}
   */
  search: async (query) => {
    try {
      const response = await axiosInstance.get('/users/search', { params: { query } });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  }
}; 