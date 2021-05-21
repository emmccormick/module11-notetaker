const router = require('express').Router();

const saveData = require('../db/saveData');

// GET request
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// BONUS: delete route and function (didn't do at time of development but would go here)
//router.delete('/notes/:id')

module.exports = router;
