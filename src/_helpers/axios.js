import axios from "axios"


// http://localhost:8080/api/v1
// ayn https://bloodmatch.herokuapp.com/api/v1

// istian backEnd https://bloodmatch.herokuapp.com
// istian frontEnd https://bloodmatch-ef5h4xoc3.vercel.app

const imgProfileURL = 'http://localhost:8080/uploads/profile/'
const imgRequesPostURL = 'http://localhost:8080/uploads/'
const baseURL = 'http://localhost:8080/api/v1'

let headers = {};

if (localStorage.jwtToken) {
    headers.authorization = `Bearer ${localStorage.jwtToken} `
}

const instance = axios.create({
    baseURL: baseURL, 
    headers,
})

const imgProfile = imgProfileURL
const imgRequestpost = imgRequesPostURL


export {instance , imgProfile , imgRequestpost }
