import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth';

export function login(username, password) {
  return axios.post(`${API_BASE_URL}/login`, {
    username,
    password,
  });
}

export function register(username, password) {
  return axios.post(`${API_BASE_URL}/register`, {
    username,
    password,
  });
}


