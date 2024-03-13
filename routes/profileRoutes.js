const express = require('express');
const {
  createGithubProfile,
  getGithubProfiles,
  getGithubProfile,
  deleteGithubProfile,
} = require('../controllers/profileController');

const router = express.Router();

router.post('/profiles', createGithubProfile);
router.get('/profiles', getGithubProfiles);
router.get('/profiles/:_id', getGithubProfile);
router.delete('/profiles/:_id', deleteGithubProfile);

module.exports = router;
