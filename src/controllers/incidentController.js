const httpStatus = require('http-status');

const connection = require('../database');

module.exports = {
    async create(req, res) {
        try {
            const { authorization: grantee_id } = req.headers;
            const { title, description, value } = req.body;
            const [id] = await connection('incidents').insert({
                grantee_id,
                title,
                description,
                value,
            });

            return res.status(httpStatus.CREATED).json({
                id,
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

    async delete(req, res) {
        try {
            const { id } = req.params;
            const { authorization: grantee_id } = req.headers;
            const incident = await connection('incidents')
                .where('id', id)
                .select()
                .first();

            if (!incident) {
                return res.status(httpStatus.NOT_FOUND).json({
                    message: 'this incident does not exists',
                });
            }

            const deleted = await connection('incidents')
                .where('id', id)
                .where('grantee_id', grantee_id)
                .delete();

            if (deleted) {
                return res.sendStatus(httpStatus.NO_CONTENT);
            }

            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "only the incident's owner can delete this incident",
            });
        } catch (error) {
            console.error(error.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error to delete incident',
            });
        }
    },
};
