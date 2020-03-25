const connection = require('../database/connection');

module.exports = {
  // List
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('incidents')
      .count();

    const incidents = await connection('incidents')
      // juntar tabelas com join
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      // limitar busca em 5 registros
      .limit(5)
      // pular para os próximos 5 registros
      .offset((page - 1) * 5)
      // selecionar todos campos de incidents e os selecioandos de ongs
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    // Repassar o total de itens da lista ao Cabeçalho da resposta
    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  // Create
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents')
      .insert({
        title,
        description,
        value,
        ong_id
      })

    return response.json({ id });
  },

  // Delete
  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      // Não autorizado
      return response.status(401).json({ error: 'Operação não permitida.' })
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    // Sem conteúdo
    return response.status(204).send();
  }
};