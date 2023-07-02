const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClubSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    img: {
        type: String
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Club = mongoose.model('Club', ClubSchema)