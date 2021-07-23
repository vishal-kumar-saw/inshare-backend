const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
connectDB();

//template engine
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