// libaries
const { generateOTP, otpExpiryTime } = require("../helpers/allGenerators")
const { emailRegex, passwordRegex } = require("../helpers/Regex");
const sendMail = require("../helpers/sendMail");
const { otpTemplate } = require("../helpers/templetes");
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');

// registration controller
const registration = async (req,res)=>{
    try{
        // get data from client 
        const {userName,email,password,phone,address} = req.body

        // retrun error if data is not provided
        if(!userName || !email || !password || !password || !phone || !address) return res.status(401).json(`User must provide all necessary information`)

            // test email regex
            if(!emailRegex.test(email)) return res.status(401).json(`You must provide a verified email`)
            // test password regex
            if(!passwordRegex.test(password)) return res.status(401).json(`must provide a strong passwor`) 
            // check password length
            if(password.length < 8) return res.status(401).json(` Password must me more then 8 characters`)

            // check for existing account
            const existingUser = await authModel.findOne({email})
            // return error if user with email already exisits 
            if(existingUser) return res.status(401).json(`Sorry an account already exists using this email`)

            // generate otp
            const otp = generateOTP()
            // send email to user
           await  sendMail(email,"OTP-Verification",otpTemplate(userName,otp))
          

            // encrypt password
            const hashPassword = await bcrypt.hash(password,10)
            
                // save to db
                await new authModel({
                    userName,
                    email,
                    password:hashPassword,
                    phone,
                    address,
                    otp,
                    otpExpiretime: otpExpiryTime()
                }).save()
       

        // all ok
        res.status(200).json(`registration complete`)
    }catch(err){
        console.log(err)
        res.status(500).json(`Internal server error : ${err}`)
    }
}

// verify otp controller
const VerifyOTP = async (req,res)=>{
    try{  
        //   get otp from client
          const {otp} = req.body
        //   if otp is not provided return error
        if(!otp) return res.status(401).json(`You must provide otp`)

            // look for existing otp in db
            const existingOtp = await authModel.findOne({otp})
            // if otp doesn't exist in db return error
            if(!existingOtp) return res.status(401).json(`Sorry the otp provided does not exist`)

                // get current time
                const currentTime = new Date(Date.now())

                console.log(currentTime)

                // check if otp is expired return error
                 if(currentTime > existingOtp.otpExpiretime) return res.status(401).json(`Sorry the otp has expired`)

                    // change vlues of otp,otp expired time, is verified in mongodb
                    existingOtp.otp = null
                    existingOtp.otpExpiretime = null
                    existingOtp.isVerified = true

                    // save changed values to db
                    existingOtp.save()



       // all ok
        res.status(200).json(`OTP verification complete`)

    }catch(err){
        console.log(err)
        res.status(500).json(`Internal server error : ${err}`)
    }
}

// exports
module.exports ={
    registration,
    VerifyOTP,
}