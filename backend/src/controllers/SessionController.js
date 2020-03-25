const connection = require('../database/connection');

module.exports = {
  // Create
  async create (request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    // não retorna em array, e sim em um único resultado
    .first();

    if (!ong) {
      // Bad request
      return response.status(400).json({
        error: 'Nenhuma ONG encontrada com este ID.'
      })
    }

    return response.json(ong);
  }
};