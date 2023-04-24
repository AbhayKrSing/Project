const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 10,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 7
    },
    pic: {
        type: String,
        default: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0'
    }


},
    {
        timestamps: true
    })

UserSchema.pre('save', async function (next) {
    if (!this.isModified()) {
        next()
    }
    const hash = await bcrypt.hash(this.password, Number(process.env.SALT_ROUND));
    this.password = hash
})
UserSchema.methods.matchpassword = async function (TYPEDpassword) {
    return bcrypt.compareSync(TYPEDpassword, this.password);
}
module.exports = mongoose.model('User', UserSchema)