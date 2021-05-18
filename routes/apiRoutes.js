const router = require('express').Router();

const { createNewNote } = require('../../lib/notes');
//const { animals } = require('../../data/animals');

router.get('/api/notes', (req, res) => {
    //need to update these
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});


router.post('/api/notes', (req, res) => {
    // working on updating
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

 
const note = createNewNote(req.body, notes);
    res.json(note);
  
});

module.exports = router;
