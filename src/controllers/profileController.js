const httpStatus = require('http-status');

const connection = require('../database');

module.exports = {
    async getById(req, res) {
        try {
            const { authorization: grantee_id } = req.headers;
            const incidents = await connection('incidents')
                .where('grantee_id', grantee_id)
                .select('*');
            return res.json(incidents);
        } catch (error) {
            console.log(error.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error to get incidents by grantee',
            });
        }
    },
};
