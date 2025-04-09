import apiClient from './index';

export const getProfiles = async (params) => apiClient.get('/users/profiles', { params });

export const likeProfile = async (data) => apiClient.post('/users/like', data);

export const getMaybeLikes = async () => apiClient.get('/users/maybe-likes');

export const undoLastSwipe = async () => apiClient.post('/users/undo');