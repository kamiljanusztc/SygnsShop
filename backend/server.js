// /* eslint-disable quotes */
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const mongoose = require('mongoose');
// // const socket = require('socket.io');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// const productsRoutes = require('./routes/products.routes');

// const app = express();

// /* MIDDLEWARE */
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// /* API ENDPOINTS */
// app.use('/api', productsRoutes);

// /* API ERROR PAGES */
// app.use('/api', (req, res) => {
//   res.status(404).send({ product: 'Not found...' });
// });

// /* REACT WEBSITE */
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// /* MONGOOSE */
// // mongoose.connect(
// //   process.env.MONGO_URI,
// //   {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   },
// // );
// mongoose.connect(
//   'mongodb+srv://kamil_janusz:-71limak71-@cluster0.uwrti.mongodb.net/SygnsShop?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("Successfully connected to the database");
// });
// db.on("error", (err) => console.log("Error: " + err));

// app.use(session({
//   secret: 'appSuperSecretSession10',
//   store: new MongoStore({ mongooseConnection: db }),
// }));

// /* START SERVER */
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log("Server is running on port: " + port);
// });



const express = require('express');
const path = require('path');
const cors = require('cors');
// const socket = require('socket.io');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const productsRoutes = require('./routes/products.routes');
const productModel = require('./models/product.model');

// app.use((req, res, next) => {
//   req.io = io;
//   next();
// });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// app.use(helmet());
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

// const io = socket(server);

// io.on('connection', (socket) => {
//   console.log('New socket!');
// });

module.exports = server;
