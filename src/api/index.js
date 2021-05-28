const router = require('express').Router();
const servicoAgendamento = require('../services');

router.get('/agendamentos',
    servicoAgendamento.carregarTodosAgendamentos
);

router.get('/agendamentos/:id',
    servicoAgendamento.carregarAgendamento
);

router.post('/agendamentos',
    servicoAgendamento.criarAgendamento
);

router.put('/agendamentos/:id',
    servicoAgendamento.deletarAgendamento
);

router.delete('/agendamentos/:id', 
    servicoAgendamento.deletarAgendamento
);

module.exports = router