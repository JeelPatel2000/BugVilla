const router = require('express').Router();
const verify = require('../middleware/verify')

const { Bug, validateBug, validateLabel } = require('../models/bug');

// get all bugs
router.get('/', verify, async (req, res) => {
  try {
    let bugs = await Bug.find({});
    res.json(bugs);
  } catch {
    res.status(400).json({ message: 'Something went wrong', error: err })
  }
})

// get bug by number `bugId`
router.get('/:id', verify, async (req, res) => {
  try {
    let bug = await Bug.findOne({ bugId: req.params.id });
    if (!bug) res.status(404).json({ error: 'Not found' })

    res.json(bug);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong', error: err })
  }
})


// create bug
router.post('/new', verify, async (req, res) => {
  const { error, value } = validateBug(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    let authorDetails = {
      username: req.user.username,
      name: req.user.name,
      _id: req.user._id
    }
    let bug = new Bug({ ...value, author: authorDetails });
    const newBug = await bug.save();
    res.json(newBug);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong', error: err })
  }
})

// close and open specific issue
const toggleBugOpenClose = (state) => {
  return async (req, res) => {
    try {
      // {new: true} tells mongo to return the updated document
      let bug = await Bug.findOneAndUpdate({ bugId: req.params.id }, { isOpen: state }, { new: true });
      if (!bug) res.status(404).json({ error: 'Not found' })

      res.json(bug);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong', error: err })
    }
  }
}
router.patch('/:id/close', verify, toggleBugOpenClose(false))
router.patch('/:id/open', verify, toggleBugOpenClose(true))

// add label to the specified bug
router.patch('/:id/labels', async (req, res) => {
  const { error, value } = validateLabel(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    // preventing _id in LabelSchema fixes the issue to `$addToSet` not working
    let bug = await Bug.findOneAndUpdate({ bugId: req.params.id }, { $addToSet: { labels: value } }, { new: true });
    if (!bug) res.status(404).json({ error: 'Not found' })

    res.json(bug);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong', error: err })
  }
})

// delete label by names
router.delete('/:id/labels/:name', async (req, res) => {
  try {
    let bug = await Bug.findOneAndUpdate(
      { bugId: req.params.id },
      { $pull: { "labels": { name: req.params.name } } },
      { new: true }
    );
    if (!bug) res.status(404).json({ error: 'Not found' })

    res.json(bug);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong', error: err })
  }
})

module.exports = router;