import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBalls() {
    return apiClient.get("/balls");
  },
  addBall(id, upCount) {
    console.log(id);
    return apiClient.patch("/balls/" + id, {
      count: upCount
    });
  },
  minusBall(id, upCount) {
    console.log(id);
    return apiClient.patch("/balls/" + id, {
      count: upCount
    });
  }
};
