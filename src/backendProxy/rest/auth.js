import apiClient from './index';

export const register = async (formData) =>
  apiClient.post('/auth/register', formData, { headers: { 'Content-Type': 'multipart/form-data' } });

export const login = async (credentials) => apiClient.post('/auth/login', credentials);

export const verifyEmail = async (token) => apiClient.get(`/auth/verify-email?token=${token}`);

export const forgotPassword = async (email) => apiClient.post('/auth/forgot-password', { email });

export const resetPassword = async (token, password) =>
  apiClient.post(`/auth/reset-password?token=${token}`, { password });