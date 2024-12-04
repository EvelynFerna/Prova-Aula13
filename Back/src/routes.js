const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')
const professor = require('./controllers/professor')
const telefone = require('./controllers/telefone')
const veiculos = require('./controllers/veiculos')

const teste = (req, res) => {
    res.json("Api respondendo");
}


router.get('/', teste);
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id',clientes.deletar);


router.post('/professor', professor.create);
router.get('/professor', professor.read);
router.put('/professor/:id', professor.update);
router.delete('/professor/:id',professor.deletar);


router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id',telefone.deletar);


router.post('/veiculos', veiculos.create);
router.get('/veiculos', veiculos.read);
router.put('/veiculos/:id', veiculos.update);
router.delete('/veiculos/:id',veiculos.deletar);


module.exports = router;