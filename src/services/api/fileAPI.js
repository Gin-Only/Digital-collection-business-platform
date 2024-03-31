import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/files';

export function uploadFile(file, path) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('path', path);

  return axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function updateFile(path, file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('path', path);

  return axios.put(`${API_BASE_URL}/update`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function getFile(path) {
  return axios.get(`${API_BASE_URL}/download?path=${path}`);
}
