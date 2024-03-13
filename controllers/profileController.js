const GitHubProfile = require('../models/GithubProfile');

exports.createGithubProfile = async (req, res) => {
  try {
    const githubProfile = new GitHubProfile(req.body);
    await githubProfile.save();
    res.status(200).json(githubProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGithubProfiles = async (req, res) => {
  try {
    const githubProfiles = await GitHubProfile.find();
    res.status(200).json(githubProfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGithubProfile = async (req, res) => {
  try {
    const id = req.params._id;
    const githubProfile = await GitHubProfile.findById(id);
    res.status(200).json(githubProfile); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGithubProfile = async (req, res) => {
  try {
    const id = req.params._id;
    await GitHubProfile.findByIdAndDelete(id);
    res.status(200).json({}); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
