import axios from "axios"

// console.log(import.meta.env.VITE_API_BASE_URL)

// console.log(import.meta.env.VITE_TEST)

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})


axiosInstance.interceptors.request.use((config) => {    
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })


export default axiosInstance  