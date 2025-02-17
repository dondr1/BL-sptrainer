import axios from 'axios';

const API_BASE_URL = 'http://192.168.18.18:8000/';

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup/`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup failed: ', error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, userData);
    return response.data;
  } catch (error) {
    console.error('Login failed: ', error.response?.data || error.message);
    throw error;
  }
};

export const accessScoresAll = async (uname) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/access_scores_all/`, {
      params: { uname },
    });
    return response.data; // Expected to have { scores: [...] }
  } catch (error) {
    console.error('Error fetching scores:',error.response?.data || error.message);
    throw error;
  }
};
