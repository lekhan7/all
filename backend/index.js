// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connections
const collageDB = mongoose.createConnection('mongodb://localhost:27017/collage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const studentFormDB = mongoose.createConnection('mongodb://localhost:27017/studentform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose Schemas
const collageSchema = new mongoose.Schema({
  clgid: Number,
  clgname: String,
  Country: String,
  State: String,
  City: String,
  Cdetails: String,
  otherdetails: String,
});

const studentFormSchema = new mongoose.Schema({
  studid: Number,
  studname: String,
  studage: Number,
  studemail: String,
  studselect: String,
  studaddress: String,
  studphno: Number,
  studpic: String, // Store base64 string
});

// Models
const Collage = collageDB.model('Collage', collageSchema);
const StudentForm = studentFormDB.model('StudentForm', studentFormSchema);

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes

// POST: Add collage
app.post('/api/collage', async (req, res) => {
  try {
    const collage = new Collage(req.body);
    await collage.save();
    res.status(201).send('Collage Added Successfully');
  } catch (error) {
    console.error('Error saving collage:', error);
    res.status(500).send('Error adding collage');
  }
});

// GET: Get collages
app.get('/api/collage', async (req, res) => {
  try {
    const collages = await Collage.find();
    res.status(200).json(collages);
  } catch (error) {
    res.status(500).send('Error retrieving collages');
  }
});

// PUT: Update collage
app.put('/api/collage', async (req, res) => {
  try {
    const { clgid, ...updatedData } = req.body;
    const updated = await Collage.findOneAndUpdate({ clgid }, updatedData, { new: true });

    if (!updated) {
      return res.status(404).send('Collage not found');
    }
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating collage:', error);
    res.status(500).send('Error updating collage');
  }
});

// POST: Submit student form with image
app.post('/api/studentform', upload.single('studpic'), async (req, res) => {
  try {
    const {
      studid,
      studname,
      studage,
      studemail,
      studselect,
      studaddress,
      studphno,
    } = req.body;

    const student = new StudentForm({
      studid,
      studname,
      studage,
      studemail,
      studselect,
      studaddress,
      studphno,
      studpic: req.file ? req.file.buffer.toString('base64') : '',
    });

    await student.save();
    res.status(201).send('Application Submitted Successfully');
  } catch (error) {
    console.error('Error saving student form:', error);
    res.status(500).send('Error submitting application');
  }
});

// GET: Get all student forms
app.get('/api/studentform', async (req, res) => {
  try {
    const students = await StudentForm.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Error fetching student details');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
