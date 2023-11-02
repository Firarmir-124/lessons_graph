import axios from 'axios';

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://dpg.gg/test/calendar.json',
});

export default axiosApi;
