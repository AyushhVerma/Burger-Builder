import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger.firebaseio.com/'
});

export default instance;
