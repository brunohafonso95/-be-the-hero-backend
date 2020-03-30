const httpStatus = require('http-status');

const connection = require('../database');

module.exports = {
    async create(req, res) {
        try {
            const { grantee_id } = req.body;
            const grantee = await connection('grantees')
                .where('id', grantee_id)
                .first();

            if (!grantee) {
                return res.status(httpStatus.NOT_FOUND).json({
                    message: 'grantee does not exists',
                });
            }

            return res.json(grantee);
        } catch (error) {
            console.error(error.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error to authenticate on service',
            });
        }
    },
};
