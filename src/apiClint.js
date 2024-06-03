const axios = require("axios");

class APIClient {
  static BASE_URL = "http://jsonplaceholder.typicode.com";

  static async getUsers() {
    const response = await axios.get(`${this.BASE_URL}/users`);
    return response.data;
  }

  static async getTodos(userId) {
    const response = await axios.get(`${this.BASE_URL}/todos`, {
      params: { userId },
    });
    return response.data;
  }
}

module.exports = APIClient;
