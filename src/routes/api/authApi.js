// libaries
const express = require('express')
const { registration, VerifyOTP, resendOTP } = require('../../controllers/authControllers')
const authApi = express.Router()


// registration api
authApi.post('/registration',registration)
// otp verification api
authApi.post('/otpverification',VerifyOTP)
// resend otp api
authApi.post('/resendotp',resendOTP)


// all exports
module.exports = authApi