import axios from "axios";
// import { StorageService } from "./storage";


let API_ENDPOINT
if (!import.meta.env.VITE_API_URL)
  throw new Error(
    "Confirm 'REACT_APP_API_URL' is set in the environment variables; create one if it's not there",
  )

API_ENDPOINT = import.meta.env.VITE_API_URL

const apiClient = axios.create({
    baseURL: API_ENDPOINT,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

// apiClient.interceptors.request.use(
//     async () => {
//         const token = await StorageService.getAuthToken()
//         // Add token to headers if available
//         if (token) {
//             request.headers = { ...request.headers, authorization: `Bearer ${token}` }
//         } else {
//             request.headers = {
//                 ...request.headers,
//                 authorization: request?.headers?.authorization || ""
//             }
//         }
//     }
// )

// apiClient.interceptors.request.use(
//     async () => {
//         const token = await StorageService.getAuthToken()
//         // Add token to headers if available
//         if (token) {
//             request.headers = { ...request.headers, authorization: `Bear ${token}` }
//         } else {
//             request.headers = {
//                 ...request.headers,
//                 authorization: request?.headers?.authorization || ""
//             }
//         }
//     }
// )

export default apiClient