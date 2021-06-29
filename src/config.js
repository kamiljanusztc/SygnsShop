export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('API_URL:', API_URL);
