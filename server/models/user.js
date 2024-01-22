import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true, minlength: 3 },
	password: { type: String, required: true, minlength: 6 },
	color: { type: String },
	avatar: { type: String },
	role: { type: String, default: 'user' },
	mute: { type: Boolean, default: false },
	ban: { type: Boolean, default: false },
});
const User = mongoose.model('User', userSchema);

export default User;
