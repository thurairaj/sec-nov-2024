import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
  const response = await axios.get(`${baseURL}/posts`);
  return response.data;
}
