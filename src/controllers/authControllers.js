// libaries

const authModel = require("../models/authModel")

// registration controller
const registration = async (req,res)=>{
    try{
        // get data from client 
        const {userName,email,password,phone,address} = req.body

        // retrun error if data is not provided
        if(!userName || !email || !password || !password || !phone || !address) return res.status(401).json(`User must provide all necessary information`)
       

            




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