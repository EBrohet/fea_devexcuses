const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/sentences', (req, res, next) => {
    const sentences = [
        {
            "http_code": 701,
            "tag": "inexcusable",
            "message": "Meh"
        },
        {
            "http_code": 702,
            "tag": "inexcusable",
            "message": "Emacs"
        },
        {
            "http_code": 703,
            "tag": "inexcusable",
            "message": "Explosion"
        }
    ];
    res.status(200).json(sentences);
});

module.exports = app;