import axios from 'axios';

const API = {
  createUser: user => {
    //NOTE: the promise is only necessary if you return data
    return new Promise(resolve => {
      axios.post('/user', user)
      .then(data => {
        const newUser = data.data;
        resolve(newUser)
      })
    });
  }
};

export default API;
