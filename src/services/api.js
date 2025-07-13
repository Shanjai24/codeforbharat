import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const getNearbyHospitals = (lat, lng) => API.get(`/hospitals/nearby?lat=${lat}&lng=${lng}`);
export const submitReport = (data) => API.post('/report', data);
export const getUserReports = (id) => API.get(`/report/user/${id}`);
export const getHospitalReports = (id) => API.get(`/report/hospital/${id}`);
export const sendTrack = (data) => API.post('/track', data);
export const getTrack = (reportId) => API.get(`/track/${reportId}`);

export default API; 