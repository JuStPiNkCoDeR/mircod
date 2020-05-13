const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + './build/static')));
app.use('/styles', express.static(__dirname + './build/static/css'));
app.use('/images', express.static(__dirname + './build/static/media'));
app.use('/scripts', express.static(__dirname + './build/static/js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './build/index.html'));
});

app.listen(process.env.PORT || 80);
