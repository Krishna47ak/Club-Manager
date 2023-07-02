const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Club = require('../../models/Club')

// To create clubs
router.post('/', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('interests', 'Interests are required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')

        const interests = req.body.interests.split(',').map(interest => interest.trim())

        const newClub = new Club({
            user: req.user.id,
            description: req.body.description,
            name: req.body.name,
            interests: interests,
        })
        const club = await newClub.save()
        res.json(club)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

// To get all clubs
router.get('/', async (req, res) => {
    try {
        const clubs = await Club.find().sort({ date: -1 })
        res.json(clubs)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// To get a single club
router.get('/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ msg: "Club not found" })
        }
        res.json(club)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To delete a club
router.delete('/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ msg: "Club not found" })
        }

        // Check user
        if (club.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "User not authorized" })
        }

        await club.remove()
        res.json({ msg: "Club removed" })
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To like a club
router.put('/like/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ msg: "Club not found" })
        }

        // Check if the club has already been liked
        if (club.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Club already liked' })
        }

        club.likes.unshift({ user: req.user.id })

        await club.save()
        res.json(club.likes)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To unlike a club
router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ msg: "Club not found" })
        }

        // Check if the club has not yet been liked
        if (club.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Club has not yet been liked' })
        }

        const removeIndex = club.likes.map(like => like.user.toString()).indexOf(req.user.id)
        club.likes.splice(removeIndex, 1)

        await club.save()
        res.json(club.likes)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

module.exports = router