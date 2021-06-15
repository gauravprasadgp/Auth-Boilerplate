var mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const {Schema} =mongoose;

const UserModel= new Schema({
username : {
    type:String,
    trim: true,
    required:[true,"Username is Requried"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true
},
password:{
    type:String,
    required:[true,"Password is Required"]
},
email:{
    type:String, 
    trim: true,
    required:[true,"Email is Required"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true
}
})

UserModel.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
  });

module.exports = mongoose.model('User',UserModel);