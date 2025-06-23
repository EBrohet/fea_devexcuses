const express = require('express');
const router = express.Router();

const sentencesCtrl = require('../controllers/sentences');

router.post('/', sentencesCtrl.createSentence);
router.get('/', sentencesCtrl.getSentences);

module.exports = router;