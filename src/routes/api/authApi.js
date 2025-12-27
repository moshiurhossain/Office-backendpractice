const express = require('express')
const { registration } = require('../../controllers/authControllers')
const authApi = express.Router()


// registration api
authApi.post('/registration',registration)

module.exports = authApi