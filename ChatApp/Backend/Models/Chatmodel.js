import mongoose from 'mongoose';
const { Schema } = mongoose;

const ChatSchema = new Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,   //Array signifies that you want to store multiple data of defined type(Here it is ObjectId)
        ref: 'User'
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    ,
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Chat', ChatSchema)