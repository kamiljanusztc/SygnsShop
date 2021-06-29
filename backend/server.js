const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const productsRoutes = require('./routes/products.routes');
// const productModel = require('./models/product.model');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', productsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

mongoose.connect('mongodb+srv://kamil_janusz:-71limak71-@cluster0.uwrti.mongodb.net/SygnsShop?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

app.use(session({
  secret: '120se',
  store: new MongoStore({ mongooseConnection: db }),
}));

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

module.exports = server;
