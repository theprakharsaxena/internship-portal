import axios from "axios";

const AxiosClient = axios.create();

console.log("+++++++++++", process.env.REACT_APP_BASE_URL);

AxiosClient.defaults.baseURL = "https://internship-43hq.onrender.com";

AxiosClient.defaults.headers = {
  "Content-Type": "application/json",
};

AxiosClient.defaults.withCredentials = true;

export default AxiosClient;
