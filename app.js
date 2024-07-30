const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const newMessageRouter = require('./routes/newMessage')
const PORT = 8080;

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports = app;   