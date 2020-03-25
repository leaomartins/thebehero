const express = require('express');

const OngController = require('./controlles/OngController');
const IncidentController = require('./controlles/IncidentController');
const ProfileController = require('./controlles/ProfileController');
const SessionController = require('./controlles/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index );/**Listar todas as Ongs Cadastradas... */
routes.post('/ongs', OngController.create);/** Cadastrar nova Ong */

routes.get('/profile',ProfileController.index);/**Listar todas os Incidentes Cadastradas da Ong... */

routes.get('/incidents',IncidentController.index );/**Listar todas os Incidentes Cadastradas... */
routes.post('/incidents', IncidentController.create);/** Cadastrar novo Incidente */
routes.delete('/incidents/:id',IncidentController.delete);/** Deletar Incidente */


module.exports = routes;