const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');


const { createNewNote } = require('../lib/notes');
const  notes = require('../db/db.json');

// a route to get all the notes (to put on the side)
router.get('/notes', (req, res) => {
    // console.log(notes);
    return res.json(notes);
});

// a route for adding a new note
router.post('/notes', (req, res) => {
    
  // set id 
  req.body.id = uuidv4();

 
const note = createNewNote(req.body, notes);
    res.json(note);
  
});

// BONUS: delete route and function (didn't do at time of development but would go here)
//router.delete('/notes/:id')

module.exports = router;
