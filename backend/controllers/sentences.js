const Sentence = require('../models/Sentence');

exports.createSentence = (req, res, next) => {
    delete req.body._id;
    const sentence = new Sentence({
        ...req.body
    });
    sentence.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getSentences = (req, res, next) => {
    Sentence.find()
        .then(sentences => res.status(200).json(sentences))
        .catch(error => res.status(400).json({ error }));
};