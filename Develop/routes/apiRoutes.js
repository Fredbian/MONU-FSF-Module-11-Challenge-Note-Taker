// modules
const router = require('express').Router()
const fs = require('fs')
const uuid = require('uuid')
const path = require('path')
const db = path.join(__dirname, '../db/db.json')

// function for reading notes
const readNotes = () => {
    return JSON.parse(fs.readFile(db) || '[]')
}

// function for creating new notes
const writeNotes = (notes) => {
    fs.writeFile(db, JSON.stringify(notes))
}

// function for deleting notes
const deleteNote = (notes) => {
    fs.writeFile(db, JSON.stringify(notes))
}


// set router for get (read)
router.get('/api/notes', (req, res) => {
    // read notes from db
    res.json(readNotes())
})

// set router for post (write)
router.post('/api/notes', (req, res) => {
    // get notes in db
    const currentNotes = readNotes()
    // new note
    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    }
    // add new note to current notes and write
    writeNotes([...currentNotes, newNote])
    // send back response
    res.json(newNote)
})

// set router for delete (rewrite)
router.delete('/api/notes/:id', (req, res) => {
    // get all notes in db
    const currentNotes = readNotes()
    // get note id to be deleted
    const deleteID = req.params.id
    // sort all notes at get all notes without deleteID note
    const notesAfterDeleted = currentNotes.filter((note) => note.id !== deleteID)
    // rewrite notes with new notes
    deleteNote(notesAfterDeleted)
    // send back response
    res.json(notesAfterDeleted)
})

module.exports = router