const express = require('express')
const { registration, VerifyOTP } = require('../../controllers/authControllers')
const authApi = express.Router()


// registration api
authApi.post('/registration',registration)
// otp verification
authApi.post('/otpverification',VerifyOTP)

module.exports = authApi