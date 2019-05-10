import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID 9355fd3ada2260c82a9062625ea58c6ba9dce03047c2c590ace97b844f8b623b'
    }
})