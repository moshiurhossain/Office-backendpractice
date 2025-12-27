// libaries

// registration controller
const registration = async (req,res)=>{
    try{



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