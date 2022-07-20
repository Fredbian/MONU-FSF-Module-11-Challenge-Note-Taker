// require modules
const router = require('express').Router()
const path = require('path')

// set router for GET/notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html' ))
})

// set router for GET *
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router