const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const socket = require('socket.io');

const productsRoutes = require('./routes/products.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
// mongoose.connect('mongodb://localhost:27017/sygnsShop', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Successfully connected to the database');
// });
// db.on('error', err => console.log('Error: ' + err));

const determineDbUri = (envType) => {
  switch (envType) {
    case 'production':
      return 'mongodb+srv://${process.env.SygnsShop}:${process.env.SygnsShop}@cluster0.uwrti.mongodb.net/SygnsShop?retryWrites=true&w=majority';
    case 'test':
      return 'mongodb://localhost:27017/NewWaveDB';
    default:
      return 'mongodb://localhost:27017/NewWaveDB';
  }
};

mongoose.connect(determineDbUri(process.env.NODE_ENV), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('New socket!');
});

/* START SERVER */
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log('Server is running on port: '+port);
// });
