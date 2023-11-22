const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name : { type : String , required : true },
    email : { type : String , required : true},
    password : { type : String , required : true},
    picture : { type : String , required : true , default : "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=826&t=st=1700551900~exp=1700552500~hmac=6e7a0754abca30e22103ecc39688645c11e0950cc6964f68cedd63984090f60d"},

},
    {
        timestamps : true,
    },

);

const User = mongoose.model("User" , userSchema);