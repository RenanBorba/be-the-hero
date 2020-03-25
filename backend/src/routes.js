const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma infomrção no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota
 *  após "?" (filtros, paginação)
 *    Ex.: localhost:3333/users?page=2&nome=Renan&idade=23
 *
 * Route Params: Parâmetros utilizados para identificar recursos
 *  Ex.: localhost:3333/users/1
 *
 * Request Body: Corpo da requisição, usado para criar ou alterar recursos
 */

/*
 * Query Params:
routes.get('/users', (request, response) => {
  const params = request.query;

  console.log(params);
**/

/*
 * Route Params:
routes.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);
**/

/*
 * Body Params:
routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Renan Borba'
  });
});
**/

/**
 * HTTP Routes
 */

/**
 * Login Routes
 */
routes.post('/sessions', SessionController.create);

/**
 * Ong Routes
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Profile Route
 */
routes.get('/profile', ProfileController.index);

/**
 * Incident Routes
 */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;