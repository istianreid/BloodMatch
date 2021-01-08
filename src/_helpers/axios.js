import axios from "axios"


// http://localhost:8080/api/v1
// https://bloodmatch.herokuapp.com/api/v1

const baseURL = 'http://localhost:8080/api/v1'
let headers = {};

if (localStorage.jwtToken) {
    headers.authorization = `Bearer ${localStorage.jwtToken} `
}

const instance = axios.create({
    baseURL: baseURL, 
    headers,
})


export default instance 
