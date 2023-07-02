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
    president: {
        type: String,
        required: true
    },
    vicepresident: {
        type: String
    },
    secretary: {
        type: String
    },
    member1: {
        type: String
    },
    member2: {
        type: String
    },
    member3: {
        type: String
    },
    collegename: {
        type: String,
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
    events: [
        {
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
        }
    ],
    achievements: [
        {
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
        }
    ],
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Club = mongoose.model('Club', ClubSchema)