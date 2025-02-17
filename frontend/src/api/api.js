import axios from 'axios';

const API_BASE_URL = 'http://192.168.18.18:8000';

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
    const response = await axios.get(`${API_BASE_URL}/access-scores-all/`, uname);
    return response.data;
  } catch (error) {
    console.error('Error fetching scores:',error.response?.data || error.message);
    throw error;
  }
};

export const accessScoresSingle = async (scoresData) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/access-scores-single/`,
      scoresData
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching scores:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const uploadChats = async (chatData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload-chat-history/`, chatData);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching scores:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const uploadScores = async (scoreData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload-scores/`,scoreData);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching scores:',
      error.response?.data || error.message
    );
    throw error;
  }
};


