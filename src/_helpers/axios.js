import axios from "axios"


// http://localhost:8080/api/v1
// ayn https://bloodmatch.herokuapp.com/api/v1
// istian https://blood-match-c8158kpgr.vercel.app

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
