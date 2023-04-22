import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserSchema = new mongoose({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 10,
    },
    password: {
        type: String,
        required: true,
        min: 7
    },
    pic: {
        type: String,
        required: true,
        default: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0'
    }


})
module.exports = mongoose.model('User', UserSchema)