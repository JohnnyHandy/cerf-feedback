import axios from 'axios'

const instance = axios.create({
    baseURL:'https://cerf-feedback.firebaseio.com/'
})

export default instance