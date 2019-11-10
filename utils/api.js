import axios from 'axios';

const api = () => {
    return axios.create({
        baseURL: 'https://saturday-delivery.herokuapp.com/api'
    })
}

export default api;