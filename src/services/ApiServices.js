import axios from "axios";

class ApiServices {

  axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
  })

  constructor() {
    this.axiosInstance.interceptors.request.use(function (config) {
      const token = localStorage.getItem('token');
      if (!token) {
        return config;
      }

      // console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    //error response
    this.axiosInstance.interceptors.response.use(function (response) {
      // console.log(response.data.errors);
      return response.data;
    }, function (error) {
      return Promise.reject(error.response.data);
    });
  }

  test = {
    get: async () => {
      return await this.axiosInstance.get('/posts')
    }
  }

  auth = {
    login: (payload) => this.axiosInstance.post('/api/login', payload),
    logout: () => this.axiosInstance.post('/auth/logout'),
  }

  tickets = {
    getTickets: (page) => this.axiosInstance.get('/api/v1/tickets?page=' + page),
    getSpecificTicket: (id) => this.axiosInstance.get(`/tickets/${id}`),
    deleteTicket: (id) => this.axiosInstance.delete(`/tickets/${id}`),
    addTicket: (payload) => this.axiosInstance.post('/tickets', payload),
    updateTicket: (id, payload) => this.axiosInstance.put(`/tickets/${id}`, payload),
  }
}

export const apiServices = new ApiServices();
