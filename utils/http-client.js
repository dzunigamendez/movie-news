import axios from 'axios';

export const API_URL = process.env.API_URL;
export const API_KEY = process.env.API_KEY;

export function GET(url, options = {}) {
  const params = options.params || {};
  const config = { ...options, params: { ...params, api_key: API_KEY } };
  return axios.get(`${API_URL}${url}`, config);
}
