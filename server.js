const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();


app.use(cors());
//template engine
// app.use(function (req, res, next) {
//     //Enabling CORS
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization");
//     next();
// });
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED ON PORT ${PORT}`);
});