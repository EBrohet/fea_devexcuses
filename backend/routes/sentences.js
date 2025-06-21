const express = require('express');
const router = express.Router();

const Sentence = require('../models/Sentence');

router.post('/', (req, res, next) => {
    delete req.body._id;
    const sentence = new Sentence({
        ...req.body
    });
    sentence.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

router.get('/', (req, res, next) => {
    Sentence.find()
        .then(sentences => res.status(200).json(sentences))
        .catch(error => res.status(400).json({ error }));
});

module.exports = router;