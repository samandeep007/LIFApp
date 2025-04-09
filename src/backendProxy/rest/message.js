import apiClient from './index';

export const getInbox = async () => apiClient.get('/messages/inbox');

export const getConversation = async (userId) => apiClient.get(`/messages/conversation/${userId}`);

export const sendMessage = async (data) => apiClient.post('/messages/send', data);

export const markMessagesRead = async (userId) => apiClient.post(`/messages/mark-read/${userId}`);

export const deleteConversation = async (userId) => apiClient.delete(`/messages/conversation/${userId}`);

export const sendConfession = async (data) => apiClient.post('/messages/confession', data);

export const getSafetyGuidelines = async () => apiClient.get('/messages/safety-guidelines');