const crypto = require('crypto');
const httpStatus = require('http-status');

const connection = require('../database');

module.exports = {
    async create(req, res) {
        try {
            const id = crypto.randomBytes(4).toString('HEX');
            const { name, email, whatsapp, city, uf } = req.body;
            await connection('grantees').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });

            return res.status(httpStatus.CREATED).json({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        } catch (error) {
            console.error(error.message);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'error to create new grantee' });
        }
    },

    async getAll(req, res) {
        try {
            const grantees = await connection('grantees').select('*');
            return res.json(grantees);
        } catch (error) {
            console.error(error.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error to list grantees',
            });
        }
    },
};
