import axios from "axios";

const API_BASE_URl = 'http://127.0.0.1:8000/';

export const signupUser = async (userData) => {
    try{
        const response = await axios.post(`${API_BASE_URl}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error("Signup failed: ", error.response?.data || error.message);
        throw error;
    }
};

export const loginUser = async (userData) => {
    try{
        const response = await axios.post(`${API_BASE_URl}/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Login failed: ', error.response?.data || error.message);
        throw error;
    }
};

export const sendWellBeingData = async (userId, wellBeingScore) => {
    try {
        const response = await axios.post(`${API_BASE_URl}/wellbeing`, {userId, wellBeingScore});
        return response.data;
    } catch (error) {
        console.error('Sending Data failed: ', error.response?.data || error.message);
        throw error;
    }
};

export const getHistoricalData = async(userId) => {
    try {
        const response = await axios.get(`${API_BASE_URl}/wellbeing/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Receiving Data failed: ', error.response?.data || error.message);
        throw error;
    }
}