import axios from "axios";

export function getHttpUserData() {
  //   return axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/87`)
  //     .then((response) => response.data);
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/87`,
  });
}
