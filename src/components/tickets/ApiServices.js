import axios from "axios";

class ApiServices {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })
  }

  test = {
    get: async () => {
      return await this.axiosInstance.get('/posts')
    }
  }

  auth = {
    login: (payload) => this.axiosInstance.post('/auth/login', payload),
    logout: () => this.axiosInstance.post('/auth/logout'),
  }

  tickets = {
    getTickets: () => this.axiosInstance.get('/tickets'),
    getSpecificTicket: (id) => this.axiosInstance.get(`/tickets/${id}`),
  }
}

export const apiServices = new ApiServices();
