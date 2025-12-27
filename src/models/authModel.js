// libaries
const mongoose = require('mongoose')

// -------------------authSchema--------------------------//
const authSchema =  new mongoose.Schema({
// ********* avatar ********* //
    avatar:{
     type:String,
     default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fuser-avatar-vector&psig=AOvVaw26HEE1r6YAIyvSFClw7tNY&ust=1761598773931000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCvm5PgwpADFQAAAAAdAAAAABAL'
     }, 
// ********* User-Name ********* //
   userName:{
    type:String,
    required:true,
   },
// ********* email ********* //
   email:{
    type:String,
    required:true,
   },
// ********* password ********* //
   password:{
    type:String,
    required:true,
   },
// ********* phone ********* //
   phone:{
    type:String,
    required:true,
   },
// ********* address ********* //
   address:{
    type:String,
    required:true,
   },
// ********* user-role ********* //
   userRole:{
    type:String,
    enum:['user','staff','admin'],
    default:'user',
   },
// ********* OTP ********* // 
   otp:{
    type:Number,
    default:null,
   },
// ********* OTP-Expire-Time ********* //
   otpExpiretime:{
    type:Date,
    default:null,
   },
// ********* Is-Verified ********* //
   isVerified:{
      type:Boolean,
      default:false,
   },

},{timestamps:true})

// all exports
module.exports = mongoose.model('auth',authSchema)