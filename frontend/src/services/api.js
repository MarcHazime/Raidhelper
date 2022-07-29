import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5001";

export const fetchPerks = async (data) => {
  try {
    return (await axios.get(`${API_URL}/perks`)).data;
  } catch (err) {
    return [];
  }
};


export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
}

export const createUser = async (data) => {
  return (await axios.post(`${API_URL}/users`)).data
}