const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    img: {
        type: String,
        required: [true, "Please provide an image"],
    },
    desc: {
        type: String,
        required: [true, "Please provide a desc"],
    },
    venue: {
        type: String,
        required: [true, "Please provide a venue"],
    },
    eventDate: {
        type: Date
    },
    host: {
        type: String,
        required: [true, "Please provide the host"],
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = Event = mongoose.model('Event', eventSchema)