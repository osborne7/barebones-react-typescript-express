const express = require('express');
const chirpStore = require('../chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        chirpStore.WriteChirp(chirpStore.GetChirp(id));
                res.json(chirpStore.GetChirp(id));

    } else {
        chirpStore.WriteChirp(chirpStore.GetChirps());
                res.send(chirpStore.GetChirps());

    }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/id', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;