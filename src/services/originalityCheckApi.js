// src/services/originalityCheckApi.js
import axios from 'axios';

export const submitOriginalityCheck = async (data) => {
  try {
    const response = await axios.post('/api/originality-check', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
