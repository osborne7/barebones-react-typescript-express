import * as express from 'express';
import * as Chirps from '../../utilities/chirpstore';
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        // chirpStore.WriteChirp(chirpStore.GetChirp(id));
        res.json(Chirps.GetChirp(id));
        // res.send(Chirps.GetChirp(id));

    } else {
        // chirpStore.WriteChirp(chirpStore.GetChirps());
        //         res.send(chirpStore.GetChirps());
        res.send(Chirps.GetChirps());

    }
});

router.post('/', (req, res) => {
    Chirps.CreateChirp((req.body));
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    Chirps.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Chirps.DeleteChirp(id);
    res.sendStatus(200);
});

export default router;
// module.exports = router;