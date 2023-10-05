import { axios } from '../../utils/axios';

export const register = async (user) => axios.post(`/register`, user);

export const login = async (user) => axios.post(`/login`, user);

export const verifyToken = async () => axios.get(`/verify`);
