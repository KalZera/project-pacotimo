import axios from "axios";

export const setupAxios = () => {
  axios.defaults.timeout = 60 * 1000;
  axios.defaults.baseURL = 'https://5f637566363f0000162d8b16.mockapi.io/milhas321/api/v1';
};
