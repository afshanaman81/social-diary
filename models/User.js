const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	gender: String,
	address: String
})

UserSchema.statics.findById = function(id, callback){
	User.findOne({id},{_v: 0},{}, callback).lean()
}

UserSchema.statics.findOrCreate = function (){

}

const User = mongoose.model('User', UserSchema)
module.exports = User
