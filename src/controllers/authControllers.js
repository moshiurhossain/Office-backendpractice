// libaries

const { generateOTP } = require("../helpers/allGenerators")
const { emailRegex, passwordRegex } = require("../helpers/Regex")
const authModel = require("../models/authModel")

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
       

            




        // save to db
        await new authModel({
            userName,
        }).save()
       

        // all ok
        res.status(200).json(`registration complete`)
    }catch(err){
        console.log(err)
        res.status(500).json(`Internal server error : ${err}`)
    }
}


// exports
module.exports ={
    registration,
}