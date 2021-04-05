const mongoose = require('../db/connection');
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			retuired: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);
const User = mongoose.model('User', UserSchema);
module.exports = User;
