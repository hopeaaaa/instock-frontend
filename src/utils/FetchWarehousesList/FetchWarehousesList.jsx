import axios from "axios";

const URL = "https://instock-api-c9ex.onrender.com";

async function loadWarehouses(path) {
  try {
    const response = await axios.get(`${URL}:${PORT}${path}`);
    return response.data;
  } catch (error) {
    console.error("Failed to load warehouses:", error);
    throw error;
  }
}

export default loadWarehouses;
