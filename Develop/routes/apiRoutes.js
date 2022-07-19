// modules
const router = require('express').Router()
const fs = require('fs')
const uuid = require('uuid')
const db = require('../db/db.json')

// function for reading notes
const readNotes = () => {
    return JSON.parse(fs.readFile(db) || '[]')
}

// function for creating new notes
const createNewNotes = () => {
    
}

// function for deleting notes



// set router for notes
router.get('/api/notes', (req, res) => {
    
})