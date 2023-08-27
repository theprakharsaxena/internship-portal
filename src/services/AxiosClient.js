import axios from "axios";

const AxiosClient = axios.create();

AxiosClient.defaults.baseURL = process.env.REACT_APP_BASE_URL || "https://internship-43hq.onrender.com";

AxiosClient.defaults.headers = {
  "Content-Type": "application/json",
};

export default AxiosClient;
