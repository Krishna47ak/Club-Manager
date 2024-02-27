const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Event = require('../../models/Event');
const Club = require('../../models/Club');

router.post('/', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('img', 'Image is required').not().isEmpty(),
    check('venue', 'Venue are required').not().isEmpty(),
    check('desc', 'Description is required').not().isEmpty(),
    check('eventDate', 'Event date is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { name, img, venue, desc, eventDate } = req.body

        const admin = await User.findById(req.user.id).select('-password')


        if (admin.role == 'student') {
            return res.status(400).json({ errors: 'You have to be a admin' })
        }

        let club = await Club.findOne({ user: req.user.id })

        if (!club) {
            return res.status(404).json({ errors: "Club not found" })
        }

        const newEvent = new Event({
            user: req.user.id,
            name,
            img,
            venue,
            desc,
            eventDate,
            host: club.name
        })

        const event = await newEvent.save()
        res.json(event)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: -1 })
        res.json(events)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})


module.exports = router