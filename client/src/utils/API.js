import axios from 'axios';

const API = {
  createUser: user => axios.post('/user', user)
}

export default API;
