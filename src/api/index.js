const router = require('express').Router();

router.get('/agendamentos', (req, resp) => {
    resp.send('ok');
});

module.exports = router