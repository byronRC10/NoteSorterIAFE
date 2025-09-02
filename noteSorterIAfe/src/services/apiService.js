// src/services/apiService.js

import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const apiService = {
  async getHello() {
    try {
      const response = await axios.get(`${API_URL}/hello/`);
      return response.data; // { message: "Hola desde la API!" }
    } catch (error) {
      console.error("Error en getHello:", error);
      throw error;
    }
  },
};
