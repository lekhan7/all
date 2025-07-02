const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');

// Create separate Mongoose instances for each database connection
const profasolDB = mongoose.createConnection('mongodb://localhost:27017/profasol', { useNewUrlParser: true, useUnifiedTopology: true });
const advisorDB = mongoose.createConnection('mongodb://localhost:27017/advisor', { useNewUrlParser: true, useUnifiedTopology: true });
const investoreDB = mongoose.createConnection('mongodb://localhost:27017/investore',{useNewUrlParser:true,useUnifiedTopology:true});
const userDB = mongoose.createConnection('mongodb://localhost:27017/user',{useNewUrlParser:true,useUnifiedTopology:true})
const bankerDB =mongoose.createConnection('mongodb://localhost:27017/banker',{useNewUrlParser:true,useUnifiedTopology:true})
// Define the schema for the profasol entries
const profasolSchema = new mongoose.Schema({
  userId: String,
  name: String,
  regno: String,
  cat: String,
  po: String,
  cus: String,
  notes: String,
  idea: String
});
const advisorerSchema = new mongoose.Schema({
  userId: String,
  name: String,
  tittle: String,
  des: String,
  notes: String,
  hint: String
});
const investoreSchema = new mongoose.Schema({
   userId: String,
  type: String,
  cat: String,
  amt: String,
  er: String,
  skill: String,
  exp: String,
  oth: String,
  adhar:String
});
const userSchema = new mongoose.Schema({
  userId: String,
  userid:String,
  uname:String,
  qdetails:String
})
const bankerSchema = new mongoose.Schema({
  userId: String,
  loan: String,
  maxage: String,
  minage: String,
  mni: String,
  guaname: String,
  conno: String,
  other:String
})
// Create a model for the profasol entries
const Profasol = profasolDB.model('Profasol', profasolSchema);
const Advisepro = advisorDB.model("Advisepro", advisorerSchema)
const Investorepro = investoreDB.model("Investorepro", investoreSchema);
const Userquer = userDB.model("userquer",userSchema);
const Banker =bankerDB.model("Banker",bankerSchema);
// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Route to add a new profasol entry
app.post('/api/proposal', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const profasol = new Profasol(req.body);
  profasol.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('Business Idea Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
app.post('/api/advisor', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const advisor = new Advisepro(req.body);
  advisor.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('Advisore Proposal  Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
app.post('/api/investore', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const investore = new Investorepro(req.body);
  investore.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('investore proposal Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
app.post('/api/user', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const user = new Userquer(req.body);
  user.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('investore proposal Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
app.post('/api/banker', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const banker = new Banker(req.body);
  banker.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('investore proposal Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
// Route to add a new user reply
// Route to add a new user reply

// Route to get all profasol entries
app.get('/api/proposal', async (req, res) => {
  try {
    console.log('Received request to get all profasol entries');
    const profasols = await Profasol.find();
    console.log('Profasol entries:', profasols);
    res.status(200).send(profasols);
  } catch (error) {
    console.error('Error while getting profasol entries:', error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});
app.get('/api/advisor', async (req, res) => {
  try {
    console.log('Received request to get all profasol entries');
    const advisor = await Advisepro.find();
    console.log('Profasol entries:', advisor);
    res.status(200).send(advisor);
  } catch (error) {
    console.error('Error while getting profasol entries:', error);
    res.status(500).send('An error occurred. Please try again later.');
  }
  app.get('/api/investore', async (req, res) => {
    try {
      console.log('Received request to get all profasol entries');
      const investore = await Investorepro.find();
      console.log('Profasol entries:', investore);
      res.status(200).send(investore);
    } catch (error) {
      console.error('Error while getting profasol entries:', error);
      res.status(500).send('An error occurred. Please try again later.');
    }
  });
  app.get('/api/user', async (req, res) => {
    try {
      console.log('Received request to get all profasol entries');
      const user = await Userquer.find();
      console.log('Profasol entries:', user);
      res.status(200).send(user);
    } catch (error) {
      console.error('Error while getting profasol entries:', error);
      res.status(500).send('An error occurred. Please try again later.');
    }
  });
  
  app.get('/api/banker', async (req, res) => {
    try {
      console.log('Received request to get all profasol entries');
      const banker = await Banker.find();
      console.log('Profasol entries:', banker);
      res.status(200).send(banker);
    } catch (error) {
      console.error('Error while getting profasol entries:', error);
      res.status(500).send('An error occurred. Please try again later.');
    }
  });
  
  // Route to get all replies for a specific user query
// Route to get a specific user query
// server.js
// server.js
// ute to get all advisor entries for a specific user
 
  

// Route to delete an advisor entry


});


// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});