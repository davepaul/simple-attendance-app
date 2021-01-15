import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.headers.post['content-type'] = 'application/json';