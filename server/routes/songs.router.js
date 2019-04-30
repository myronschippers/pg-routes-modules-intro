const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    const queryText = 'SELECT * FROM songs;';

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error making query! ', err);
            res.sendStatus(500);
        });
});

router.post('/', (req,res) => {
    const newSong = req.body;

    const queryText = `INSERT INTO songs (artist, track, published, rank)
        VALUES ($1, $2, $3, $4)`;

    pool.query(queryText, [newSong.artist, newSong.track, newSong.published, newSong.rank])
        .then((response) => {
            console.log(response);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Err:', err);
            res.sendStatus(500);
        });
});


module.exports = router;