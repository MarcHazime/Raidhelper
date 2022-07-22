import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000";

export const fetchPerks = async (data) => {
    try {
      return (await axios.get(`${API_URL}/perks`)).data;
    } catch (err) {
      return [];
    }
  };