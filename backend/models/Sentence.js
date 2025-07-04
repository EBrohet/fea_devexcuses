const mongoose = require('mongoose');

const sentenceSchema = mongoose.Schema({
    http_code: { type: Number, required: true },
    tag: { type: String, required: true },
    message: { type: String, required: true },
});

module.exports = mongoose.model('Sentence', sentenceSchema);