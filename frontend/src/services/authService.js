import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth"

export const login = (credentials) => {
    return axios.post(`${AUTH_API_BASE_URL}/login`, credentials)
}

export const register = (userData) => {
    return axios.post(`${AUTH_API_BASE_URL}/register`, userData)
}