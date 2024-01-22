import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	text: { type: String, required: true, maxlength: 200 },
	timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', messageSchema);

export default Message;
