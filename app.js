const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
