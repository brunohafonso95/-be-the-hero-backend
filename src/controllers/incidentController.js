const httpStatus = require('http-status');

const connection = require('../database');

module.exports = {
    async create(req, res) {
        try {
            const { authorization: grantee_id } = req.headers;
            const { title, description, value } = req.body;
            await connection('incidents').insert({
                grantee_id,
                title,
                description,
                value,
            });

            return res.status(httpStatus.CREATED).json({
                grantee_id,
                title,
                description,
                value,
            });
        } catch (error) {
            console.error(error.message);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'error to create incident' });
        }
    },

    async getAll(req, res) {
        try {
            const incidents = await connection('incidents').select('*');
            return res.json(incidents);
        } catch (error) {
            console.error(error.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error to list incidents',
            });
        }
    },
};
