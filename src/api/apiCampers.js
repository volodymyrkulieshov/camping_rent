import axios from 'axios';

axios.defaults.baseURL = 'https://6620e97f3bf790e070b12a2d.mockapi.io/api/';

export const getAllCampers = async page => {
  const response = await axios.get(`/adverts?page=${page}&limit=4`);
  return response.data;
};
