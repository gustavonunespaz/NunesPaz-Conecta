const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bem-vindo ao NunesPaz Conecta!');
});

module.exports = router;
