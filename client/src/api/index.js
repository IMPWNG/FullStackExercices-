import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getData = () => axios.get(SERVER_URL)
  .then(res => res.data)
  .catch(err => console.log(err));
