import { LoginPayload } from './../models/auth';
import axiosClient from './axios-client';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post('/auth/signin', payload);
  },
  logout() {
    return axiosClient.post('/auth/logout');
  },
  getTasks() {
    return axiosClient.get('/tasks');
  },
};
