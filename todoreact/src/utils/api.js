import axios from "axios";
const baseURL =
  "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com";

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
