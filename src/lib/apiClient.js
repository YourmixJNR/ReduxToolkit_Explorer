import axios from "axios";
import { StorageService } from "./storage";

let API_ENDPOINT;
if (!import.meta.env.VITE_API_URL)
  throw new Error(
    "Confirm 'REACT_APP_API_URL' is set in the environment variables; create one if it's not there"
  );

API_ENDPOINT = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (request) => {
    const token = await StorageService.getAuthToken()
    // Attach token to make api request
    if (token) {
      request.headers = { ...request.headers, authorization: `Bearer ${token}` }
    } else {
      request.headers = {
        ...request.headers,
        authorization: request?.headers?.authorization || '',
      }
    }

    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient;
