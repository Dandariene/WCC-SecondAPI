const {criarToken} = require ('../../shared/gerarToken');

module.exports = {
    login: (req, resp) => {
        const accessToken = criarToken(req.user);
        resp.set('Authorization', accessToken);
        resp.accessToken(200).send();
    }
}