const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Naren:narendar@naren.4zanptd.mongodb.net/watchapp?retryWrites=true&w=majority&appName=NAREN', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Schema and Model
const incidentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
});

const Incident = mongoose.model('Incident', incidentSchema);

// Routes
app.get('/incidents', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/incidents', async (req, res) => {
  try {
    const newIncident = new Incident(req.body);
    await newIncident.save();
    res.status(201).json(newIncident);
  } catch (error) {
    console.error('Error creating incident:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.put('/incidents/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedIncident = await Incident.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedIncident);
  } catch (error) {
    console.error('Error updating incident:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.delete('/incidents/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Incident.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting incident:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
