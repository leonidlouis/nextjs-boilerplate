import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.apiURL,
  timeout: 10000,
});


const sampleApiRequest = () =>
  api.get('/todos/');

export default {
  sampleApiRequest
};
