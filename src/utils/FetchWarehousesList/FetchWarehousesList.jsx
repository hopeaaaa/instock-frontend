import axios from "axios";

const URL = import.meta.env.VITE_SERVER_BASE_URL;
const PORT = import.meta.env.VITE_SERVER_PORT || 8080;

async function loadWarehouses(path) {
  try {
    const response = await axios.get(`${URL}:${PORT}${path}`);
    return response.data;
  } catch (error) {}
}

export default loadWarehouses;
