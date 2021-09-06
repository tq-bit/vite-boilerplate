// Configure your API clients here w/ Axios
import axios from 'axios';

export const urlClient = axios.create({
  baseURL: `http://localhost:8080/`
})