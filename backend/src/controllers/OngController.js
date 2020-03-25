/**
 * SQLite
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*') (abordagem em JS)
 */

const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  // List
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  // Create
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    // Gerar 4 bytes aleatórios e converter em string hexadecimal
    const id = crypto.randomBytes(4).toString('HEX');

    // conectar com a tabela ongs e inserir:
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id });
  }
};