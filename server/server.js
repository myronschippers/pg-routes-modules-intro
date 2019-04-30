const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const songs = require('./routes/songs.router');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/songs', songs);

app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT);
});
